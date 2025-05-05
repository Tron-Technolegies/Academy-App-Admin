import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavItem({ icon, name, path, location }) {
  return (
    <NavLink
      to={path}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[#6a6969] hover:text-black hover:bg-[#FAEBEB] ease-in-out duration-500 ${
        location && location.includes(path) && "bg-[#FAEBEB] text-black"
      }`}
    >
      <p>{icon}</p>
      <p>{name}</p>
    </NavLink>
  );
}
