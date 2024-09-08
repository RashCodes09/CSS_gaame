import React from "react";
// import Header from "../Static/Header";
// import Footer from "../Static/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
