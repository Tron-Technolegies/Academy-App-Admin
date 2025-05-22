import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import DeletePopup from "../../components/DeletePopup";
import UserStats from "../../components/dashboard/UserStats";
import DashBoardHeader from "../../components/dashboard/DashBoardHeader";

const DashboardPage = () => {
  return (
    <div>
      <DashBoardHeader />
      <UserStats />
    </div>
  );
};

export default DashboardPage;
