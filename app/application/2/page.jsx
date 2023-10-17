import ApplicationMenubar from "@/components/application/ApplicationMenubar";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <ApplicationMenubar />
      <div className="bg-[#2C5E8D] w-[80%] mt-5 text-white flex flex-col items-center p-3 rounded-lg">
        <span className="text-base md:text-2xl font-bold">
          Applicant Information
        </span>
        <span className="text-[7px] md:text-base italic mb-3">
          Please fill out with accurate information.
        </span>
        <div className="w-full bg-gradient-to-b flex flex-col gap-4 from-[#3A7CBB] to-[#133C63] rounded-lg p-10">
          <div>
            <span className="font-bold text-sm">Your Name</span>
            <div className="flex flex-row gap-1 text-[8px]">
              <Input placeholder="First Name" />
              <Input placeholder="Middle Name" />
              <Input placeholder="Last Name" />
            </div>
          </div>
          <div>
            <span className="font-bold text-sm">Your Email Address</span>
            <div className="flex flex-col gap-1 text-[8px]">
              <Input placeholder="Email Address" />
              <Input placeholder="Re-enter Email Address" />
              <Label className="text-[8px] md:text-sm">
                Please input your Email Address twice.
              </Label>
            </div>
          </div>
          <div>
            <span className="font-bold text-sm">
              University applied to/intend to enroll or currently enrolled
            </span>
            <Input />
          </div>
          <div>
            <span className="font-bold text-sm">Course/Degree Program</span>
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
