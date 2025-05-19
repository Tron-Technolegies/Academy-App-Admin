import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useGetSingleCategory from "../../../hooks/courseCategories/useGetSingleCategory";
import useUpdateCategory from "../../../hooks/courseCategories/useUpdateCategory";
import FormInput from "../../FromInput";
import Loading from "../../Loading";

const EditDomainForm = () => {
  const [name, setName] = useState("");

  const { id } = useParams();

  const { category, loading: categoryLoading } = useGetSingleCategory({ id });
  const { updateCategory, loading } = useUpdateCategory();

  useEffect(() => {
    if (category) {
      setName(category.categoryName || "");
    }
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please fill out all fields");
      return;
    }

    await updateCategory({
      categoryName: name,
      id,
    });
  };

  if (categoryLoading || loading) {
    return (
      <div>
        <Loading /> {/* Display loading spinner */}
      </div>
    );
  }
  if (!category) return <p>Category not found.</p>;

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <h4 className="text-[#4F4F4F] text-3xl p-6 font-semibold">Edit Domain</h4>

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
          disabled={loading}
          className="bg-[#48089F] w-32 text-white rounded-sm px-3 py-2.5 text-sm font-semibold hover:bg-[#ba9fd6] hover:scale-105 transition-transform duration-300"
          type="submit"
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </div>
    </form>
  );
};

export default EditDomainForm;
