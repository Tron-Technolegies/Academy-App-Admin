import React, { useContext } from "react";
import SearchBox from "../SearchBox";
import { AdminContext } from "../../utils/AdminContext";

const TeacherHeader = ({ search, setSearch }) => {
  const { refetchTrigger, setRefetchTrigger } = useContext(AdminContext);
  return (
    <div className="flex flex-col">
      <h4 className="text-[#1D0B30] font-semibold text-3xl ">Teachers list</h4>
      <div className="w-full flex items-center justify-center">
        <SearchBox
          value={search}
          onchange={(e) => setSearch(e.target.value)}
          submit={() => setRefetchTrigger(!refetchTrigger)}
        />
      </div>
    </div>
  );
};

export default TeacherHeader;
