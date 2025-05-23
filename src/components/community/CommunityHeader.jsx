import React from "react";
import AddButton from "../AddButton";

const CommunityHeader = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <h4 className="text-xl sm:text-3xl text-[#1D0B30] font-semibold pl-5 sm:pl-0 md:pt-6">
        Community
      </h4>
      <AddButton route={"/community/new"} title={"Add"} />
    </div>
  );
};

export default CommunityHeader;
