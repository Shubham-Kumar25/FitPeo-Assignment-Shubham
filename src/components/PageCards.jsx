import React from "react";
import {
  FaDollarSign,
  FaShoppingCart,
  FaBalanceScale,
  FaChartBar,
} from "react-icons/fa";
import Card from "./Card";

const PageCards = () => {
  return (
    <div className="p-2">
      <div className="flex flex-col justify-between sm:flex-row">
        <Card
          icon={<FaDollarSign size={48} color="green" />}
          title="Earning"
          value="$5,000"
          change={37.8}
          isIncrease={true}
          color="green"
        />
        <Card
          icon={<FaShoppingCart size={48} color="indigo" />}
          title="Orders"
          value="500"
          change={8.2}
          isIncrease={true}
          color="indigo"
        />
        <Card
          icon={<FaBalanceScale size={48} color="blue" />}
          title="Balance"
          value="$10,000"
          change={-5.3}
          isIncrease={false}
          color="blue"
        />
        <Card
          icon={<FaChartBar size={48} color="red" />}
          title="Total Sales"
          value="$25,000"
          change={12.5}
          isIncrease={true}
          color="red"
        />
      </div>
    </div>
  );
};

export default PageCards;
