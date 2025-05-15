import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";

import { AdminContext } from "../utils/AdminContext";
import DeletePopup from "../components/DeletePopUp";

function Layout() {
  const { showDeletePopup, setShowDeletePopup } = useContext(AdminContext);

  return (
    <div className="flex h-screen">
      <div className="hidden lg:block">
        <SideBar />
      </div>

      <div className="flex-1 p-5 mb-10 overflow-auto max-h-screen">
        <Outlet />
      </div>

      {showDeletePopup && <DeletePopup setPopup={setShowDeletePopup} />}
    </div>
  );
}

export default Layout;
