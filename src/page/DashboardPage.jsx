import React from "react";
import PageCards from "../components/PageCards";
import OverviewGraph from "../components/OverviewGraph";
import "../index.css";
import CustomerChart from "../components/CustomerChart";
import ProductSell from "../components/ProductSell";
import Navbar from "../components/Navbar";

function DashboardPage() {
  return (
    <div className="">
      <Navbar />
      <PageCards />
      <div className="items-start justify-between m-4 space-y-4 md:flex md:gap-2 md:space-y-0">
        <OverviewGraph />
        <CustomerChart />
      </div>
      <ProductSell />
    </div>
  );
}

export default DashboardPage;
