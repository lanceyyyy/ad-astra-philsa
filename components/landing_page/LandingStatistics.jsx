import React from "react";

const LandingStatistics = ({ number, title }) => {
  return (
    <div className="flex flex-col justify-center items-center px-5">
      <p className="text-[#F5CC67] text-3xl font-extrabold">{number}</p>
      <p className="text-white text-sm">{title}</p>
    </div>
  );
};

export default LandingStatistics;
