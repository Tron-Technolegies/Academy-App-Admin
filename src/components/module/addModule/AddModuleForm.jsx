import React, { useState } from "react";
import useAddModule from "../../../hooks/module/useAddModule";
import FormInput from "../../FromInput";
import FormSelect from "../../FormSelect";
import useGetAllCategory from "../../../hooks/courseCategories/useGetAllCategory";

import useGetAllCourses from "../../../hooks/course/useGetAllCourses";

const AddModuleForm = () => {
  const [module, setModule] = useState("");
  const [course, setCourse] = useState("");
  const [category, setCategory] = useState("");

  const { addModule, loading } = useAddModule();
  const { category: categories, loading: loadingCategories } =
    useGetAllCategory();
  const { course: courses, loading: loadingCourses } = useGetAllCourses();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addModule({ moduleName: module, relatedCourse: course });
  };

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <h4 className="text-[#4F4F4F] text-3xl p-6 font-semibold">Add Domain</h4>

      <div className="max-w-150 h-80 py-6 px-6">
        <FormSelect
          title="Domain" // Title for the select dropdown
          value={category} // The currently selected category
          onChange={(e) => setCategory(e.target.value)} // Set the category when changed
          list={categories} // The list of categories fetched from the API
          multi={false} // Single selection (false)
          displayField="categoryName" // Display the category name from the category object
        />
        <FormSelect
          title="Course Name" // Title for the select dropdown
          value={course} // The currently selected category
          onChange={(e) => setCourse(e.target.value)} // Set the category when changed
          list={courses} // The list of categories fetched from the API
          multi={false} // Single selection (false)
          displayField="courseName" // Display the category name from the category object
        />
        <FormInput
          label="Module Name"
          type="text"
          value={module}
          onChange={(e) => setModule(e.target.value)}
          placeholder=""
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

export default AddModuleForm;
