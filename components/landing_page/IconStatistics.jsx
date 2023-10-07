import React from "react";

const IconStatistics = ({ name, icon }) => {
  return (
    <div className="p-10 flex flex-col items-center">
      <div className="">{icon}</div>
      <div className="pt-5">
        <p className="text-2xl font-medium">{name}</p>
      </div>
    </div>
  );
};

export default IconStatistics;
