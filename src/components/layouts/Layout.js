import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />


      <div className="container">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
