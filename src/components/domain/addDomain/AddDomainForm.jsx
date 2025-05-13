import React, { useState } from "react";

import useAddCategory from "../../../hooks/courseCategories/useAddCategory";
import FormInput from "../../FromInput";

const AddDomainForm = () => {
  const [name, setName] = useState("");
  const { addCategory, loading } = useAddCategory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCategory({ categoryName: name });
  };

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <h4 className="text-[#4F4F4F] text-3xl p-6 font-semibold">Add Domain</h4>

      <div className="max-w-150 h-80 py-6 px-6">
        <FormInput
          label="Domain Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter domain name"
        />
      </div>

      <div className="max-w-190 px-6 flex justify-end">
        <button
          className="bg-[#48089F] w-32 text-white rounded-sm px-3 py-2.5 text-sm font-semibold hover:bg-[#ba9fd6] hover:scale-105 transition-transform duration-300"
          type="submit"
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </div>
    </form>
  );
};

export default AddDomainForm;
