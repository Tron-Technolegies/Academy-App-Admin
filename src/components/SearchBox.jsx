import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBox({ value, onchange, submit }) {
  return (
    <div className="flex items-center justify-start space-x-2">
      <button onClick={submit} className="w-5 h-10">
        <CiSearch className="text-[#585353] font-semibold bg-[#FCFAFA] text-md" />
      </button>

      <input
        type="text"
        placeholder="Search for a teachers by name or email"
        value={value}
        onChange={onchange}
        className="py-2 text-[#8A8A8A] text-md bg-[#FCFAFA] focus:outline-none w-full"
      ></input>
    </div>
  );
}
