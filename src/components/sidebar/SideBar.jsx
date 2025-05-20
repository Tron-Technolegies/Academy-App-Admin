import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import { navItems } from "../../utils/NavItems";
import { IoIosLogOut } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { useLocation } from "react-router-dom";

import { AdminContext } from "../../utils/AdminContext";
import useLogout from "../../hooks/auth/useLogout";

export default function SideBar() {
  const location = useLocation();
  const { setUser } = useContext(AdminContext);
  const { logout, loading } = useLogout();
  return (
    <div className="w-[350px] h-screen p-7 flex flex-col bg-[#1D0B30]">
      <div className="flex gap-5 mt-4 p-7">
        <img src="src/assets/Tron2.png" className="w-[50px] h-[60px]"></img>
        <img src="src/assets/Tron3.png" className="w-[100px] h-[50px]"></img>
      </div>

      <div className="my-7 flex flex-col gap-2">
        <NavLink
          to={"/"}
          className={`flex items-center gap-3 px-3 py-2 rounded-sm hover:outline hover:outline-[#FAEBEB] ease-in-out duration-500 ${
            location.pathname === "/" && "bg-[#48089F] text-white"
          }`}
        >
          <p className="text-white">
            <MdDashboard />
          </p>
          <p className="text-white hover:text-[#c7b1e6]">Dashboard</p>
        </NavLink>

        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            name={item.name}
            path={item.path}
            location={location?.pathname}
          />
        ))}
        <button
          onClick={async () => {
            const confirmLogout = window.confirm(
              "Are you sure you want to logout?"
            );
            if (confirmLogout) {
              await logout();
              setUser(null);
            }
          }}
          className="flex items-center gap-2 px-3 py-2 text-white rounded-sm hover:outline hover:outline-[#FAEBEB] hover:text-[#c7b1e6] ease-in-out duration-500"
        >
          <IoIosLogOut /> Logout
        </button>
      </div>
    </div>
  );
}
