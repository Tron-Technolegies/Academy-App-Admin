import React from "react";
import AddButton from "../AddButton";

const CourseHeader = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <h4 className="text-[#1D0B30] font-semibold text-3xl">Domain & Course</h4>
      <AddButton route={"/course/new"} title={"Add"} />
    </div>
  );
};

export default CourseHeader;
