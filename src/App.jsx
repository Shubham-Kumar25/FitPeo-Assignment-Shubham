import React from "react";
import "./index.css";
import DashboardPage from "./page/DashboardPage";
import Sidebar from "./sidebar/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <DashboardPage />
    </div>
  );
};

export default App;
