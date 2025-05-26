import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useUpdateCourse from "../../../hooks/course/useUpdateCourse";
import useGetSingleCourse from "../../../hooks/course/useGetSingleCourse";
import useGetAllCategory from "../../../hooks/courseCategories/useGetAllCategory";
import useGetAllInstructor from "../../../hooks/instructor/useGetAllInstructor";
import Loading from "../../Loading";
import FormSelect from "../../FormSelect";
import FormInput from "../../FromInput";
import { toast } from "react-toastify";

const EditCourseForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [instructor, setInstructor] = useState("");
  const [overView, setOverView] = useState("");
  const [error, setError] = useState("");

  const { id } = useParams();

  const { loading: courseLoading, course } = useGetSingleCourse({ id });
  const { category: categories, loading: categoriesLoading } =
    useGetAllCategory();
  const { instructor: instructors, loading: instructorsLoading } =
    useGetAllInstructor();
  const { updateCourse, loading } = useUpdateCourse();

  // Map instructors with fullName safely
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

  useEffect(() => {
    if (course && instructors.length > 0) {
      const { courseName, courseCategory, instructor, courseOverView } = course;

      setName(courseName || "");
      setCategory(courseCategory || "");

      const instructorId =
        typeof instructor === "string"
          ? instructor
          : instructor && typeof instructor === "object" && instructor._id
          ? instructor._id
          : "";

      setInstructor(instructorId);
      setOverView(courseOverView || "");
    }
  }, [course, instructors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !category || !instructor || !overView.trim()) {
      toast.error("Please fill all the fields.");
      return;
    }

    await updateCourse({
      courseName: name,
      courseCategory: category,
      instructor,
      courseOverView: overView,
      id,
    });
  };

  if (courseLoading || categoriesLoading || instructorsLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <h4 className="text-[#4F4F4F] text-3xl p-6 font-semibold">Edit Course</h4>

      <div className="max-w-150 h-auto py-6 px-6">
        <FormInput
          label="Course Name"
          type="text"
          placeholder="Enter course name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={false} // Or pass a string message like "Course name is required"
          disabled={loading} // You’ll need to add this to the component (see below)
        />

        <FormSelect
          title="Domain"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          list={categories}
          multi={false}
          displayField="categoryName"
          error={false}
          disabled={loading}
        />

        <FormSelect
          title="Instructor"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          list={instructorsWithNames}
          multi={false}
          displayField="fullName"
          error={false} // You can set true if there's an error to show red borders
        />

        <label
          htmlFor="overview"
          className="block mb-1 font-medium  text-[#8A8A8A]"
        >
          Overview
        </label>
        <textarea
          id="overview"
          value={overView}
          onChange={(e) => setOverView(e.target.value)}
          disabled={loading}
          className="rounded-sm bg-[#F5F5F5] border border-gray-300 text-[#030229] text-md py-1 px-2 focus:outline-none w-full"
          placeholder="Enter course overview"
        />

        <div className="max-w-190 mt-4 px-6 flex justify-end gap-5">
          <Link
            to="/domain/course"
            className="bg-[#EEEDEE] text-[#858585] rounded-sm w-32 px-10 py-2.5 text-sm font-semibold hover:bg-[#EEEDEE] hover:scale-105 transition-transform duration-300"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#48089F] w-31 text-white rounded-sm px-3 py-2.5 text-sm font-semibold hover:bg-[#ba9fd6] hover:scale-105 transition-transform duration-300"
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditCourseForm;
