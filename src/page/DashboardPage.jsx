import React from "react";

import PageCards from "../components/PageCards"; // Import the PageCards component
import OverviewGraph from "../components/OverviewGraph"; // Import the OverviewGraph component
import "../index.css";
import CustomerChart from "../components/CustomerChart";
import "../app.css";
import ProductSell from "../components/ProductSell";
import Navbar from "../components/Navbar";

function DashboardPage() {
  return (
    <div className="md:ml-64">
      <Navbar />
      <PageCards /> {/* Include the PageCards component here */}
      <div className="md:flex md:gap-2 md:space-y-0 space-y-4 m-4 items-start justify-between">
        <OverviewGraph />
        <CustomerChart />
      </div>
      <ProductSell />
    </div>
  );
}

export default DashboardPage;
