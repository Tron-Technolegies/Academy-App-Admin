import React, { useState } from "react";
import useAddCourse from "../../../hooks/course/useAddCourse";
import FormInput from "../../FromInput";
import useGetAllCategory from "../../../hooks/courseCategories/useGetAllCategory";
import FormSelect from "../../FormSelect";
import { Link } from "react-router-dom";
import GoBack from "../../GoBack";
import useGetAllInstructor from "../../../hooks/instructor/useGetAllInstructor";
import { toast } from "react-toastify";
import Loading from "../../Loading";

const AddCourseForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [instructor, setInstructor] = useState("");
  const [overview, setOverview] = useState("");

  const { addCourse, loading } = useAddCourse();
  const { category: categories, loading: loadingCategories } =
    useGetAllCategory();

  const { instructor: instructors, loadingInstructors } = useGetAllInstructor();
  console.log("Instructors list:", instructors);

  const instructorsWithNames = instructors.map((inst) => {
    const hasDetails =
      Array.isArray(inst.instructorDetails) &&
      inst.instructorDetails.length > 0;
    return {
      ...inst,
      fullName: hasDetails
        ? inst.instructorDetails[0].instructorName
        : `${inst.firstName || ""} ${inst.lastName || ""}`.trim() || "Unknown",
    };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addCourse({
      courseName: name,
      courseCategory: category,
      instructor,
      courseOverView: overview,
    });
  };

  if (loadingCategories || loadingInstructors) {
    return <Loading />;
  }

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

        <FormSelect
          title="Instructor"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          list={instructorsWithNames}
          multi={false}
          displayField="fullName"
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
          to="/domain/course"
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
