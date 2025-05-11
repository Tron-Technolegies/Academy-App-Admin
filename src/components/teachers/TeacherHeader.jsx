import React, { useContext } from "react";
import SearchBox from "../SearchBox";
import { AdminContext } from "../../utils/AdminContext";
import AddButton from "../AddButton";

const TeacherHeader = ({ search, setSearch }) => {
  const { refetchTrigger, setRefetchTrigger } = useContext(AdminContext);
  return (
    <div>
      <div className="flex  items-center justify-between p-4">
        <h4 className="text-[#1D0B30] font-semibold text-3xl ">
          Teachers list
        </h4>
        <AddButton route={"/Teachers/new"} title={"Add"} />
      </div>
      <div className="w-full p-4">
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
