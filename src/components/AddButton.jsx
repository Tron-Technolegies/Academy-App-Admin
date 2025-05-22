import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AddButton({ route, title }) {
  return (
    <Link
      to={route}
      className="flex gap-1 sm:gap-2 bg-[#1D0B30] text-white rounded-md px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold hover:bg-[#ba9fd6] hover:scale-105 ease-in-out duration-300"
    >
      <span className="flex items-center justify-center">
        <FaPlus />
      </span>
      <span className="px-3"> {title}</span>
    </Link>
  );
}
