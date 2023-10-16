import React from "react";
import PageCards from "../components/PageCards";
import OverviewGraph from "../components/OverviewGraph";
import CustomerChart from "../components/CustomerChart";
import ProductSell from "../components/ProductSell";
import Navbar from "../components/Navbar";
import "../index.css";

function DashboardPage() {
  return (
    <div>
      <Navbar />
      <PageCards />
      <div className="m-4 space-y-4 md:flex md:space-y-0 md:gap-2">
        <OverviewGraph />
        <CustomerChart />
      </div>
      <ProductSell />
    </div>
  );
}

export default DashboardPage;
