import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const CustomerChart = () => {
  const data = [
    {
      title: "Indigo Gradient",
      value: 45,
      color: "rgba(75, 0, 130, 0.8)",
    },
    {
      title: "Red Gradient",
      value: 20,
      color: "rgba(255, 0, 0, 0.8)",
    },
    {
      title: "Empty",
      value: 35,
      color: "rgba(236, 236, 236, 1)",
    },
  ];

  return (
    <div className="relative w-full p-4 bg-white rounded-lg shadow-lg customer-chart">
      <div className="text-center md:text-start">
        <h2 className="text-xl font-bold md:text-2xl">Customers</h2>
        <p className="text-gray-500">Customers that buy products</p>
      </div>
      <PieChart
        data={data}
        lineWidth={20}
        radius={40}
        animate={true}
        animationDuration={1000}
        animationEasing="ease-out"
        labelStyle={{
          fontSize: "10px",
          fontFamily: "sans-serif",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <p className="text-lg font-bold md:text-xl" style={{ margin: 0 }}>
          65% <br />
          <span className="text-sm md:text-xl">Total New Customers</span>
        </p>
      </div>
    </div>
  );
};

export default CustomerChart;
