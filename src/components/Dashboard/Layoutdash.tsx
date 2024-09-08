import React from "react";
import Sider from "../Static/Sider";
import Dashboard from "./Dashboard";

const Layoutdash = () => {
  return (
    <div className="flex items-center gap-2 px-2 py-2">
      <Sider />
      <Dashboard />
    </div>
  );
};

export default Layoutdash;
