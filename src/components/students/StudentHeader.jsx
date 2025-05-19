import React, { useContext, useEffect, useState } from "react";
import SearchBox from "../SearchBox";

import { AdminContext } from "../../utils/AdminContext";

const StudentHeader = ({ search, setSearch }) => {
  const { setRefetchTrigger, refetchTrigger } = useContext(AdminContext);

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <h4 className="text-[#1D0B30] font-semibold text-3xl">Students List</h4>
      </div>

      <div className="w-full p-4">
        <SearchBox
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          submit={() => setRefetchTrigger(!refetchTrigger)}
          // no submit prop needed if refetch runs on typing
        />
      </div>
    </div>
  );
};

export default StudentHeader;
