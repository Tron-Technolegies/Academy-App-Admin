import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import { navItems } from "../../utils/NavItems";
import { IoIosLogOut } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { AdminContext } from "../../utils/AdminContext";
import useLogout from "../../hooks/auth/useLogout";
import LogoutPopup from "../LogoutPopup";

export default function SideBar() {
  const location = useLocation();
  const { setUser } = useContext(AdminContext);
  const { logout, loading } = useLogout();
  const [LogoutPopUp, setLogoutPopUp] = useState(false);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setLogoutPopUp(false);
  };
  return (
    <div className="w-[350px] h-screen p-7 flex flex-col bg-[#1D0B30]">
      <div className="flex gap-5 mt-4 p-7">
        <img src="/Tron2.png" className="w-[50px] h-[60px]"></img>
        <img src="/Tron3.png" className="w-[100px] h-[50px]"></img>
      </div>

      <div className="my-7 flex flex-col gap-2">
        <NavLink
          to="/"
          // onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-sm transition duration-300
             ${
               isActive
                 ? "bg-[#48089F] text-white"
                 : "text-white hover:text-[#c7b1e6] hover:outline hover:outline-[#FAEBEB]"
             }`
          }
        >
          <MdDashboard size={20} />
          <span>Dashboard</span>
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
          onClick={() => setLogoutPopUp(true)}
          className="flex items-center gap-2 px-3 py-2 text-white rounded-sm hover:outline hover:outline-[#FAEBEB] hover:text-[#c7b1e6] ease-in-out duration-500"
        >
          <IoIosLogOut /> Logout
        </button>
      </div>
      <LogoutPopup
        isOpen={LogoutPopUp}
        onConfirm={handleLogout}
        onCancel={() => setLogoutPopUp(false)}
      />
    </div>
  );
}
