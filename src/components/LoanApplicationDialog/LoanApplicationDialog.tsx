"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";

interface LoanApplicationDialogProps {
  openDialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
}

const LoanApplicationDialog = ({
  openDialog,
  setOpenDialog
}: LoanApplicationDialogProps) => {
  const [income, setIncome] = useState<number | undefined>(undefined);
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const { toast } = useToast();

  const applyLoanHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!amount || !income) {
      toast({
        variant: "destructive",
        title: "Please provide valid income and loan amount.",
        className: "w-fit"
      });
      return;
    }

    const isExceed: boolean = amount >= income / 3;

    if (isExceed) {
      toast({
        variant: "destructive",
        title: "Your loan request exceeds 1/3 of your income",
        className: "w-fit"
      });
    } else {
      toast({
        title: "Your loan request has been submitted successfully.",
        className: "w-fit"
      });
      setOpenDialog(false);
    }
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Apply for a Loan</DialogTitle>
          <DialogDescription className="space-x-2 pt-5">
            <form onSubmit={applyLoanHandle} className="space-y-6">
              <div className="space-y-3">
                <label htmlFor="income" className="block text-sm">
                  Monthly Income
                </label>
                <div className="relative">
                  <Input
                    id="income"
                    value={income ?? ""}
                    onChange={(e) =>
                      setIncome(parseInt(e.target.value) || undefined)
                    }
                    type="number"
                    placeholder="Enter your monthly income"
                    className="pl-6"
                  />
                  <p className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="amount" className="block text-sm">
                  Loan Amount
                </label>
                <div className="relative">
                  <Input
                    id="amount"
                    value={amount ?? ""}
                    onChange={(e) =>
                      setAmount(parseInt(e.target.value) || undefined)
                    }
                    type="number"
                    placeholder="Enter the loan amount"
                    className="pl-6"
                  />
                  <p className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                text="Submit"
                className="text-white bg-primary rounded-xl w-full h-12"
              />
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LoanApplicationDialog;
