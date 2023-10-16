import React from "react";
import "./index.css";
import "./app.css";
import DashboardPage from "./page/DashboardPage";
import Sidebar from "./sidebar/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <DashboardPage />
      </div>
    </div>
  );
};

export default App;
