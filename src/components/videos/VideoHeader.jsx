import React, { useContext, useState } from "react";
import AddButton from "../AddButton";
import SearchBox from "../SearchBox";
import { AdminContext } from "../../utils/AdminContext";

const VideoHeader = ({ search, setSearch }) => {
  const { setRefetchTrigger, refetchTrigger } = useContext(AdminContext);
  return (
    <div>
      <div className="flex items-center justify-between p-6">
        <h4 className="text-xl sm:text-3xl text-[#1D0B30] font-semibold pl-5 sm:pl-0 md:pt-6">
          Videos
        </h4>
        <AddButton route="/videos/new" title="Add" />
      </div>
      <div className="w-full p-4">
        <SearchBox
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          submit={() => setRefetchTrigger(!refetchTrigger)}
          placeholder="search by video"
        />
      </div>
    </div>
  );
};

export default VideoHeader;
