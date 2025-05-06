import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";

function Layout() {
  return (
    <div className="flex">
      <div className="hidden lg:block">
        <SideBar />
      </div>

      <div className="p-5 mb-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
