import React, { useContext, useEffect, useState } from "react";
import SearchBox from "../SearchBox";
import AddButton from "../AddButton";
import { AdminContext } from "../../utils/AdminContext";

const TeacherHeader = ({ search, setSearch }) => {
  const { setRefetchTrigger, refetchTrigger } = useContext(AdminContext);

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <h4 className="text-[#1D0B30] font-semibold text-3xl">Teachers List</h4>
        <AddButton route="/Teachers/new" title="Add" />
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

export default TeacherHeader;
