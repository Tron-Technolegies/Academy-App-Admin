import React from "react";

export default function FormSelect({ title, value, onchange, list, multi }) {
  return (
    <div className="form-row">
      <label
        htmlFor="status"
        className="form-label text-[#8A8A8A] font-semibold"
      >
        {title}
      </label>
      <div className="flex items-center">
        <select
          id="status"
          value={value}
          multiple={multi ? true : false}
          onChange={onchange}
          className={` className=" rounded-sm bg-[#F5F5F5] border border-gray-300 text-[#030229] text-md py-1 px-2  focus:outline-none w-1/2 ${
            multi ? "h-40" : "h-11"
          }`}
        >
          {list?.map((item) => (
            <option
              className="border-b py-1 border-gray-300"
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
