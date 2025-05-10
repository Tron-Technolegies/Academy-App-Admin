import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
const GoBack = ({ route }) => {
  return (
    <Link
      to={route}
      className="py-2 px-3 text-[#8A8A8A] font-semibold gap-2 flex items-center hover:font-bold"
    >
      <span className="font-bold ">
        <IoIosArrowRoundBack />
      </span>
      Go Back
    </Link>
  );
};

export default GoBack;
