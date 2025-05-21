import React, { useContext } from "react";
import SearchBox from "../SearchBox";
import AddButton from "../AddButton";
import { AdminContext } from "../../utils/AdminContext";

const TeacherHeader = ({ search, setSearch }) => {
  const { setRefetchTrigger, refetchTrigger } = useContext(AdminContext);

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <h4 className="text-[#1D0B30] font-semibold text-3xl pl-5 sm:pl-0">
          Teachers List
        </h4>
        <AddButton route="/teachers/new" title="Add" />
      </div>

      <div className="w-full p-4">
        <SearchBox
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          submit={() => setRefetchTrigger(!refetchTrigger)}
        />
      </div>
    </div>
  );
};

export default TeacherHeader;
