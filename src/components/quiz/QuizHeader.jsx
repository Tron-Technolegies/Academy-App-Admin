import React from "react";
import AddButton from "../AddButton";

const QuizHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <h4 className="text-xl sm:text-3xl text-[#1D0B30] font-semibold pl-5 sm:pl-0 md:pt-6">
        Quiz
      </h4>
      <AddButton route={"/quiz/new"} title={"Add"} />
    </div>
  );
};

export default QuizHeader;
