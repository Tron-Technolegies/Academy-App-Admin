import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import DeletePopup from "../../components/DeletePopup";
import UserStats from "../../components/dashboard/UserStats";
import DashBoardHeader from "../../components/dashboard/DashBoardHeader";
import WelcomeUser from "../../components/dashboard/WelcomeUser";
import NewUsersTable from "../../components/dashboard/dashboardList";

const DashboardPage = () => {
  return (
    <div>
      <DashBoardHeader />
      <WelcomeUser />
      <UserStats />
      <NewUsersTable />
    </div>
  );
};

export default DashboardPage;
