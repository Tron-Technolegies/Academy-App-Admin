import React from "react";

export default function FormSelect({
  title,
  value,
  onChange,
  list,
  multi,
  displayField,
}) {
  return (
    <div className="form-row pt-2 pb-4">
      <label
        htmlFor={title}
        className="form-label text-[#8A8A8A] font-semibold  "
      >
        {title}
      </label>
      <div className="flex items-center ">
        <select
          id={title}
          value={value}
          multiple={multi ? true : false}
          onChange={onChange}
          className={`rounded-sm bg-[#F5F5F5] border border-gray-300 text-[#030229] text-md py-1 px-2 focus:outline-none w-full ${
            multi ? "h-40" : "h-11"
          }`}
        >
          <option value="" disabled>
            Select {title}
          </option>
          {/* Dynamically render options based on list content */}
          {list?.map((item) => {
            // Determine the display text dynamically based on available properties
            let displayText = item;

            // If the item is an object and the displayField exists, use that field
            if (typeof item === "object") {
              displayText =
                item[displayField] || Object.values(item).join(", "); // Default to joining all values if field not found
            }

            return (
              <option
                className="border-b p-1 border-gray-300"
                key={item._id || item} // Assuming item is an object, otherwise it’s a simple value
                value={item._id || item} // Similarly, use _id if it's an object, or item if it's a string/number
              >
                {displayText} {/* Display dynamic field */}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
