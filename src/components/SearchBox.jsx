import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBox({ value, onChange, submit, placeholder }) {
  return (
    <div className="flex items-center justify-start space-x-2">
      <button onClick={submit} className="w-5 h-10 sm:w-4 sm:h-8">
        <CiSearch className="text-[#585353] font-semibold bg-[#FCFAFA] text-md" />
      </button>

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full text-[#8A8A8A] bg-[#FCFAFA] focus:outline-none 
                   text-md py-2 px-3
                   sm:text-sm sm:py-1 sm:px-2"
      />
    </div>
  );
}
