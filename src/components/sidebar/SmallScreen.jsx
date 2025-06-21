// components/sidebar/MobileSidebar.jsx
import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineX } from "react-icons/hi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import NavItem from "./NavItem";
import { navItems } from "../../utils/NavItems";
import { AdminContext } from "../../utils/AdminContext";
import useLogout from "../../hooks/auth/useLogout";
import LogoutPopup from "../LogoutPopup";

export default function SmallScreen() {
  const [open, setOpen] = useState(false);
  const [LogoutPopUp, setLogoutPopUp] = useState(false);
  const { setUser } = useContext(AdminContext);
  const { logout } = useLogout();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setLogoutPopUp(false);
    setOpen(false);
  };

  return (
    <div>
      {/* Toggle Button */}
      <button
        className={`p-3 fixed top-1 left-0 z-50 ${
          open ? "text-white" : "text-black"
        }`}
        onClick={() => setOpen(!open)}
      >
        {open ? <HiOutlineX size={28} /> : <HiOutlineMenuAlt4 size={28} />}
      </button>

      {/* Overlay Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-90 bg-[#1D0B30] z-40 p-6 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex gap-5 m-7">
          <img src="/Tron2.png" className="w-[40px] h-[50px]" alt="" />
          <img src="/Tron3.png" className="w-[90px] h-[40px]" alt="" />
        </div>

        <NavLink
          to="/"
          onClick={() => setOpen(false)}
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
            onClick={() => setOpen(false)}
          />
        ))}

        <button
          onClick={() => {
            setLogoutPopUp(true);
          }}
          className="flex items-center gap-2 px-3 py-2 text-white rounded-sm hover:outline hover:outline-[#FAEBEB] hover:text-[#c7b1e6] ease-in-out duration-500"
        >
          <IoIosLogOut /> Logout
        </button>

        <LogoutPopup
          isOpen={LogoutPopUp}
          onConfirm={handleLogout}
          onCancel={() => setLogoutPopUp(false)}
        />
      </div>
    </div>
  );
}
