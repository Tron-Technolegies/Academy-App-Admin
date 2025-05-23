import React, { useContext, useEffect, useState } from "react";
import SearchBox from "../SearchBox";

import { AdminContext } from "../../utils/AdminContext";

const StudentHeader = ({ search, setSearch }) => {
  const { setRefetchTrigger, refetchTrigger } = useContext(AdminContext);

  return (
    <div>
      <div className="flex items-center justify-between p-7">
        <h4 className="text-xl sm:text-3xl text-[#1D0B30] font-semibold pl-5 sm:pl-0 md:pt-6">
          Students List
        </h4>
      </div>

      <div className="w-full p-4">
        <SearchBox
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          submit={() => setRefetchTrigger(!refetchTrigger)}
          placeholder="search by student name or email"
        />
      </div>
    </div>
  );
};

export default StudentHeader;
