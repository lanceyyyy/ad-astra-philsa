import Image from "next/image";
import React from "react";

const TestimonyCard = ({ url, fname, lname, course, school, message }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center w-3/4">
      <div className="flex flex-col w-1/2 md:w-1/3 items-center md:mr-5 ">
        <Image
          src={url}
          alt={`Photo of ${name}`}
          width={100}
          height={100}
          style={{
            borderRadius: "100%",
          }}
        />
        <span className="text-4xl flex font-bold text-center">
          <p className="text-[#1F5383] pr-2">{fname}</p>
          <p className="text-[#F5D26F]">{lname}</p>
        </span>
        <span className="text-sm font-bold text-center">{course}</span>
        <span className="text-sm font-md text-center">{school}</span>
      </div>
      <p className="bg-[#1F5383]/75 text-white w-3/4 rounded-md md:w-1/2 p-5 mb-5">
        {message}
      </p>
    </div>
  );
};

export default TestimonyCard;
