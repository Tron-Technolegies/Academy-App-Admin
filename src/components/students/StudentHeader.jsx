import React, { useContext, useEffect, useState } from "react";
import AddButton from "../AddButton";
import SearchBox from "../SearchBox";
import { AdminContext } from "../../utils/AdminContext";

const StudentHeader = () => {
  const { setRefetchTrigger, refetchTrigger, searchTerm, setSearchTerm } =
    useContext(AdminContext);

  const [localSearch, setLocalSearch] = useState(searchTerm);
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(localSearch);
    }, 1000);

    return () => clearTimeout(handler);
  }, [localSearch]);

  useEffect(() => {
    if (debouncedSearch !== searchTerm) {
      setSearchTerm(debouncedSearch); // update context searchTerm
      setRefetchTrigger(!refetchTrigger); // trigger data refresh
    }
  }, [debouncedSearch]);

  return (
    <div>
      <div className="flex justify-between items-center p-6">
        <h4 className="text-xl sm:text-3xl text-[#1D0B30] font-semibold pl-5 sm:pl-0 md:pt-6">
          Students
        </h4>
      </div>
      <div className="w-full p-4">
        <SearchBox
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          submit={() => {
            setSearchTerm(localSearch);
            setRefetchTrigger(!refetchTrigger);
          }}
          placeholder="Search by student name or email"
        />
      </div>
    </div>
  );
};

export default StudentHeader;
