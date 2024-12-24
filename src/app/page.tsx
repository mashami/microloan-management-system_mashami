"use client";

import LoanApplicationDialog from "@/components/LoanApplicationDialog/LoanApplicationDialog";
import LoanApplicationTable from "@/components/LoanApplicationTable/LoanApplicationTable";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="space-y-16 pb-5 pt-8">
        <h1 className="text-center text-[40px] font-semibold">
          Welcome to Loan Application
        </h1>

        <div className="space-y-6 md:px-20 px-0">
          <div className="flex justify-end">
            <Button
              onClick={() => setOpen(true)}
              text="Apply for Loan"
              className="rounded-md text-white "
            />
          </div>

          <LoanApplicationTable />
        </div>
      </div>

      <LoanApplicationDialog setOpenDialog={setOpen} openDialog={open} />
    </>
  );
}
