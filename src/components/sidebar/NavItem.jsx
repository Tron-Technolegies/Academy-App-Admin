import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavItem({ icon, name, path, location, onClick }) {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-sm text-white hover:text-[#c7b1e6] hover:outline hover:outline-[#FAEBEB] ease-in-out duration-500 ${
        location && location.includes(path) && "bg-[#48089F] text-white"
      }`}
    >
      <p>{icon}</p>
      <p>{name}</p>
    </NavLink>
  );
}

// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";

// export default function NavItem({ icon, name, path }) {
//   const location = useLocation();
//   const isActive = location.pathname.includes(path);

//   return (
//     <NavLink
//       to={path}
//       onClick={() => setShowSmallBar(false)}
//       className={`flex items-center gap-3 px-3 py-2 rounded-sm ease-in-out duration-500
//         ${
//           isActive
//             ? "bg-[#48089F] text-white"
//             : "text-[#71539b] lg:text-white hover:text-[#c7b1e6] hover:outline hover:outline-[#FAEBEB]"
//         }
//       `}
//     >
//       <p>{icon}</p>
//       <p>{name}</p>
//     </NavLink>
//   );
// }
