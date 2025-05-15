import React from "react";

export default function FormInput({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div>
      {label && (
        <label className="block text-[#8A8A8A] font-semibold mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`rounded-md w-full py-1 px-2 focus:outline-none 
          ${
            error ? "border-red-500 bg-red-50" : "border-gray-300 bg-[#F5F5F5]"
          } 
          text-gray-900 border`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
