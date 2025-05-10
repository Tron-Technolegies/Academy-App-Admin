import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBox({ value, onchange, submit }) {
  return (
    <div className="flex gap-1 items-center justify-end ">
      <input
        type="text"
        placeholder="search"
        value={value}
        onChange={onchange}
        className="px-4 py-2 border rounded-lg"
      ></input>
      <button
        onClick={submit}
        className="w-10 h-10 border rounded-lg flex justify-center items-center text-xl cursor-pointer bg-black text-white"
      >
        <CiSearch />
      </button>
    </div>
  );
}
