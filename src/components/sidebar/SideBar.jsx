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
    <div>
      <div>
        <img src></img>
      </div>

      <div>
        <NavLink to="/">
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
        <button>
          <IoIosLogOut />
          Logout
        </button>
      </div>
    </div>
  );
}
