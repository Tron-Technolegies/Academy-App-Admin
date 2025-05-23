import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";

import { AdminContext } from "../utils/AdminContext";
import DeletePopup from "../components/DeletePopup";
import SmallScreen from "../components/sidebar/SmallScreen";
import useGetUserInfo from "../hooks/auth/useGetUserInfo";
import Loading from "../components/Loading";

function Layout() {
  const { showDeletePopup, setShowDeletePopup } = useContext(AdminContext);
  const { loading, user, refetch } = useGetUserInfo();

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="flex h-screen">
      <div className="hidden lg:block">
        <SideBar />
      </div>

      <div className="lg:hidden">
        <SmallScreen />
      </div>

      <div className="flex-1 p-5 mb-10 overflow-auto max-h-screen">
        <Outlet />
      </div>

      {showDeletePopup && <DeletePopup setPopup={setShowDeletePopup} />}
    </div>
  );
}

export default Layout;
