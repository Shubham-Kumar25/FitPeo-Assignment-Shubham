import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Card = ({ icon, title, value, change, color, isIncrease }) => {
  // Define background color classes for different colors
  const backgroundColorClasses = {
    blue: "bg-blue-100",
    green: "bg-green-100",
    red: "bg-red-100",
    indigo: "bg-indigo-100",
  };

  // Default to gray background if the color is not specified
  const backgroundColorClass = backgroundColorClasses[color] || "bg-gray-300";

  return (
    <div className="w-full p-2 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <div className="flex items-center mb-4 space-x-4 justify-evenly">
          {/* Display the icon with the specified or default background color */}
          <div className={`rounded-full w-16 h-16 ${backgroundColorClass} p-2`}>
            {icon}
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="mb-1 text-gray-500">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <div className="flex items-center">
              {/* Display either an up or down arrow icon based on the isIncrease prop */}
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
