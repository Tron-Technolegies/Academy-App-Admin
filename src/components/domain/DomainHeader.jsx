import React from "react";
import AddButton from "../AddButton";

const DomainHeader = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <h4 className="text-xl sm:text-3xl text-[#1D0B30] font-semibold pl-5 sm:pl-0 md:pt-6">
        Domain & Course
      </h4>
      <AddButton route={"/domain/new"} title={"Add"} />
    </div>
  );
};

export default DomainHeader;
