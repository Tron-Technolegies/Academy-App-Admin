import React from "react";
import AddButton from "../AddButton";

const VideoHeader = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <h4 className="text-[#1D0B30] font-semibold text-3xl">Videos</h4>
        <AddButton route="/videos/new" title="Add" />
      </div>
    </div>
  );
};

export default VideoHeader;
