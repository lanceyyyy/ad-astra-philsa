"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import ApplicationMenubar from "@/components/application/ApplicationMenubar";
import Link from "next/link";
import { useState } from "react";

const Application = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <ApplicationMenubar />
      <div className="bg-[#2C5E8D] w-[80%] mt-5 text-white flex flex-col items-center p-3 rounded-lg">
        <span className="font-bold my-3 md:self-start md:ml-5 md:text-2xl">
          APPLICATION: AD ASTRA Scholarship
        </span>
        <span className="text-[10px] text-justify px-5 md:text-base">
          This form is for the collection of information of individuals relative
          to their application to the PhilSA AD ASTRA Scholarship. All data
          received will be processed following the Data Privacy Act of 2012.
          Data collected in this form will solely be used for PhilSA Activities
          only.
        </span>
        <span className="text-[10px] text-justify mt-3 px-5 md:text-base">
          Before filling out this form, please be sure that you have read and
          fully understood the details of the PhilSA AD ASTRA Scholarship
          Program. Also prepare the electronic copies (in pdf or in jpeg) of all
          relevant documents for submission. Application forms can be accessed
          here.
        </span>

        <div className="mt-10 flex flex-col md:flex-row gap-10">
          <div className="text-center">
            <span className="">For Local Scholarship Grant</span>
            <Table>
              <TableHeader className="bg-[#1F5383]">
                <TableRow>
                  <TableHead className="text-white text-center">
                    Intake
                  </TableHead>
                  <TableHead className="text-white text-center">
                    Deadline
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>First Semester/Aug to Sept 2023</TableCell>
                  <TableCell>July 15, 2023</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Second Semester/Jan to Feb 2024 intake</TableCell>
                  <TableCell>October 15, 2023</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="flex flex-col items-center gap-10">
            <div className="text-center">
              <span className="">For Local Scholarship Grant</span>
              <Table>
                <TableHeader className="bg-[#1F5383]">
                  <TableRow>
                    <TableHead className="text-white text-center">
                      Intake
                    </TableHead>
                    <TableHead className="text-white text-center">
                      Deadline
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>January to July 2024</TableCell>
                    <TableCell>August 31, 2023</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className=" text-center">
              <span className="">For Stand-Alone Sandwich Program</span>
              <Table>
                <TableHeader className="bg-[#1F5383]">
                  <TableRow>
                    <TableHead className="text-white text-center">
                      Intake
                    </TableHead>
                    <TableHead className="text-white text-center">
                      Deadline
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>------------------------</TableCell>
                    <TableCell>August 31, 2023</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 my-5">
          <Checkbox id="terms" />
          <Label htmlFor="terms">
            I have read and agreed to the above terms.
          </Label>
        </div>
        <div className="flex gap-5">
          <Button className>Save</Button>
          <Button className="bg-[#419CFF] text-white">
            <Link href="application/2">Next</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Application;
