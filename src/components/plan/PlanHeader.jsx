import React from "react";
import AddButton from "../AddButton";

const PlanHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <h4 className="text-xl sm:text-3xl text-[#1D0B30] font-semibold pl-5 sm:pl-0 md:pt-6">
        Subscription list
      </h4>
      <AddButton route={"/subscription/new"} title={"Add"} />
    </div>
  );
};

export default PlanHeader;
