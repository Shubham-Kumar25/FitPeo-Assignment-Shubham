import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Card = ({ icon, title, value, change, color, isIncrease }) => {
  const backgroundColorClasses = {
    blue: "bg-blue-100",
    green: "bg-green-100",
    red: "bg-red-100",
    indigo: "bg-indigo-100",
  };

  const backgroundColorClass = backgroundColorClasses[color] || "bg-gray-300";

  return (
    <div className="w-full p-2 sm:w-60 ">
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <div className="flex items-center mb-4 space-x-4 justify-evenly">
          <div className={`rounded-full w-16 h-16 ${backgroundColorClass} p-2`}>
            {icon}
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="mb-1 text-gray-500">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <div className="flex items-center">
              {isIncrease ? (
                <FaArrowUp size={16} color="green" />
              ) : (
                <FaArrowDown size={16} color="red" />
              )}
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
