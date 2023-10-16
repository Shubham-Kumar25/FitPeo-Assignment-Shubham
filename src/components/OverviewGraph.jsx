import React, { useState } from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", earnings: 50 },
  { name: "Feb", earnings: 75 },
  { name: "Mar", earnings: 60 },
  { name: "Apr", earnings: 70 },
  { name: "May", earnings: 90 },
  { name: "Jun", earnings: 80 },
  { name: "Jul", earnings: 120 },
  { name: "Aug", earnings: 150 },
  { name: "Sep", earnings: 80 },
  { name: "Oct", earnings: 60 },
  { name: "Nov", earnings: 70 },
  { name: "Dec", earnings: 85 },
];

const datas = ["Annualy", "Monthly"]; // Define the available years

const OverviewGraph = () => {
  const [selectedYear, setSelectedYear] = useState("Quarterly"); // Initial selected year as "Quarterly"

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value); // Update the selected year when the dropdown changes
  };

  return (
    <div className="overview-graph w-full p-4 bg-white rounded-lg shadow-lg relative">
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-black">Overview</h2>
        <p className="text-gray-500">Monthly Earning</p>
      </div>
      <div className="absolute top-0 right-4 m-4">
        <select
          id="yearSelect"
          value={selectedYear}
          onChange={handleYearChange}
          className="p-2 border rounded"
        >
          <option value="Quarterly">Quarterly</option>
          {datas.map((data) => (
            <option key={data} value={data}>
              {data}
            </option>
          ))}
        </select>
      </div>
      <div className="h-60 md:h-80 lg:h-96 mt-8 md:mt-12 lg:mt-16">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
          >
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <Bar dataKey="earnings" shape={<RoundBar />} fill="#A79BE4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const RoundBar = (props) => {
  const { x, y, width, height } = props;

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={10}
      ry={10}
      fill="#A79BE4"
    />
  );
};

export default OverviewGraph;
