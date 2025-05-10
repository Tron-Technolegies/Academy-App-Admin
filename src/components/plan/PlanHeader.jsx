import React from "react";
import AddButton from "../AddButton";

const PlanHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <h4 className="text-[#1D0B30] font-semibold text-3xl">
        Subscription list
      </h4>
      <AddButton route={"/subscription/new"} title={"Add"} />
    </div>
  );
};

export default PlanHeader;
