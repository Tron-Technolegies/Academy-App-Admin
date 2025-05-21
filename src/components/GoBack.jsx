import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
const GoBack = ({ route }) => {
  return (
    <Link
      to={route}
      className="py-2 px-2 sm:px-3 text-[#8A8A8A] text-sm sm:text-base font-semibold gap-1 sm:gap-2 flex items-center hover:font-bold"
    >
      <span className="text-lg sm:text-xl p-4">
        <IoIosArrowRoundBack />
      </span>
      Go Back
    </Link>
  );
};

export default GoBack;
