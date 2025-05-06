import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import { navItems } from "../../utils/NavItems";
import { IoIosLogOut } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { useLocation } from "react-router-dom";

export default function SideBar() {
  const location = useLocation();
  return (
    <div className="w-[350px] h-screen p-7 flex flex-col bg-[#1D0B30]">
      <div className="flex gap-5 mt-10 p-7">
        <img src="src/assets/Tron2.png" className="w-[50px]"></img>
        <img src="src/assets/Tron.png" className="w-[120px]"></img>
      </div>

      <div className="my-7 flex flex-col gap-2">
        <NavLink
          to={"/"}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg text-white hover:text-black hover:bg-[#FAEBEB] ease-in-out duration-500 ${
            location.pathname === "/" && "bg-[#FAEBEB] text-black"
          }`}
        >
          <p>
            <MdDashboard />
          </p>
          <p>Dashboard</p>
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
        <button className="text-white mt-10 px-4">
          <IoIosLogOut />
        </button>
      </div>
    </div>
  );
}
