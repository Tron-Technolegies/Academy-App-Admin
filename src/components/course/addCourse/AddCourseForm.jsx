import React, { useState } from "react";
import useAddCourse from "../../../hooks/course/useAddCourse";
import FormInput from "../../FromInput";
import useGetAllCategory from "../../../hooks/courseCategories/useGetAllCategory";
import FormSelect from "../../FormSelect";
import { Link } from "react-router-dom";
import GoBack from "../../GoBack";

const AddCourseForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [instructor, setInstructor] = useState("");
  const [overview, setOverview] = useState("");

  const { addCourse, loading } = useAddCourse();
  const { category: categories, loading: loadingCategories } =
    useGetAllCategory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, category }); // ✅ Debug here

    await addCourse({
      courseName: name,
      courseCategory: category,
      instructor,
      courseOverView: overview,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <h4 className="text-[#4F4F4F] text-3xl p-6 font-semibold">Add Course</h4>

      <div className="max-w-150 max-h-screen p-6">
        <FormInput
          label="Course Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=""
        />

        {/* Render FormSelect for categories */}
        <FormSelect
          title="Domain"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          list={categories}
          multi={false}
          displayField="categoryName"
        />

        <FormInput
          label="Instructor"
          type="text"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          placeholder=""
        />

        <FormInput
          label="Overview"
          type="text"
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
          placeholder=""
        />
      </div>

      <div className="max-w-200 pt-4 px-6  flex justify-end gap-3">
        <Link
          to="/domain"
          className="bg-[#EEEDEE] text-[#858585] rounded-sm w-32 px-10 py-2.5 text-sm font-semibold hover:bg-[#EEEDEE] hover:scale-105 transition-transform duration-300"
        >
          cancel
        </Link>
        <button
          className="bg-[#48089F] w-31 text-white rounded-sm px-3 py-2.5 text-sm font-semibold hover:bg-[#ba9fd6] hover:scale-105 transition-transform duration-300"
          type="submit"
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </div>
    </form>
  );
};

export default AddCourseForm;
