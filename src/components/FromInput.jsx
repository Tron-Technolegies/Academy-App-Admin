import React from "react";

export default function FormInput({
  label,
  type,
  placeholder,
  value,
  onChange, // should be camelCase
}) {
  return (
    <div>
      {label && (
        <label className="block text-[#8A8A8A] font-medium mb-1">{label}</label>
      )}
      <input
        type={type}
        className=" rounded-md bg-[#F5F5F5] border border-gray-300 text-gray-900 py-1 px-2 w-full focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
