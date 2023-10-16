import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Card = ({ icon, title, value, change, color, isIncrease }) => {
  const colorClasses = {
    blue: "bg-blue-100",
    green: "bg-green-100",
    red: "bg-red-100",
    indigo: "bg-indigo-100",
  };

  const backgroundColorClass = colorClasses[color] || "bg-gray-300";

  return (
    <div className="w-full p-2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <div className="flex items-center gap-3 mb-4 justify-evenly">
          <div
            className={`flex p-4 items-center shadow-lg justify-center rounded-full w-16 h-16 ${backgroundColorClass} p-2`}
          >
            {icon}
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className={`text-gray-500  mb-1`}>{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <div className="flex items-center">
              <i className={`mr-2 text-sm  rounded-full p-1 shadow-md`}>
                {isIncrease ? (
                  <FaArrowUp size={16} color="green" />
                ) : (
                  <FaArrowDown size={16} color="red" />
                )}
              </i>
              <p className={isIncrease ? "text-green-500" : "text-red-500"}>
                {Math.abs(change)}% this month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
