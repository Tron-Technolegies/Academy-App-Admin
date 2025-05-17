import React from "react";
import AddButton from "../AddButton";

const SubCommunityHeader = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <h4 className="text-[#1D0B30] font-semibold text-3xl">Community</h4>
      <AddButton route={"/community/SubCommunity/new"} title={"Add"} />
    </div>
  );
};

export default SubCommunityHeader;
