import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Domain", path: "/domain" },
  { name: "Course", path: "/course" },
  { name: "Module", path: "/module" },
];

const DomainNavLink = () => {
  return (
    <div className="w-full bg-white pt-4">
      <nav className="border-b-2 border-[#EDE6F5] w-full">
        <ul className="flex text-[#8A8A8A] font-semibold text-xl">
          {links.map((link) => (
            <li key={link.path} className="flex-1">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block text-center py-4 transition-colors duration-300 ${
                    isActive
                      ? "bg-[#EDE6F5] text-[#1D0B30]"
                      : "hover:bg-[#EDE6F5]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DomainNavLink;
