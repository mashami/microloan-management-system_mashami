"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

import React from "react";

const LoanApplicationTable = () => {
  return (
    <Table>
      <TableCaption>A list of loan application</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Dates</TableHead>

          <TableHead>Mounthly income</TableHead>
          <TableHead>Loan Amount</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">11/12/2024</TableCell>
          <TableCell>$400,000</TableCell>
          <TableCell>$100,000</TableCell>
          <TableCell className="text-right ">Pending</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">11/12/2024</TableCell>
          <TableCell>$400,000</TableCell>
          <TableCell>$100,000</TableCell>
          <TableCell className="text-right text-green-600">approved</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">11/12/2024</TableCell>
          <TableCell>$400,000</TableCell>
          <TableCell>$100,000</TableCell>
          <TableCell className="text-right">Pending</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">11/12/2024</TableCell>
          <TableCell>$400,000</TableCell>
          <TableCell>$100,000</TableCell>
          <TableCell className="text-right text-red-600">decline</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default LoanApplicationTable;
