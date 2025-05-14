import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useUpdateCourse from "../../../hooks/course/useUpdateCourse";
import useGetSingleCourse from "../../../hooks/course/useGetSingleCourse";
import useGetAllCategory from "../../../hooks/courseCategories/useGetAllCategory";
import Loading from "../../Loading";

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
  const { updateCourse, loading } = useUpdateCourse();

  useEffect(() => {
    if (course) {
      const { courseName, courseCategory, instructor, courseOverView } = course;
      setName(courseName || "");
      setCategory(courseCategory || "");
      setInstructor(instructor || "");
      setOverView(courseOverView || "");
    }
  }, [course]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !category || !instructor || !overView) {
      setError("Please fill out all fields.");
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

  if (courseLoading || categoriesLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!course) return <p>Course not found.</p>;
  if (categories.length === 0) return <p>Loading categories...</p>;

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Edit Course</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <label className="block mb-1 font-medium">Course Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 px-3 py-2 mb-4 rounded"
        placeholder="Enter course name"
      />

      <label className="block mb-1 font-medium">Domain</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border border-gray-300 px-3 py-2 mb-4 rounded"
      >
        <option value="">Select a category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.categoryName}
          </option>
        ))}
      </select>

      <label className="block mb-1 font-medium">Instructor</label>
      <input
        type="text"
        value={instructor}
        onChange={(e) => setInstructor(e.target.value)}
        className="w-full border border-gray-300 px-3 py-2 mb-4 rounded"
        placeholder="Enter instructor name"
      />

      <label className="block mb-1 font-medium">Overview</label>
      <textarea
        value={overView}
        onChange={(e) => setOverView(e.target.value)}
        className="w-full border border-gray-300 px-3 py-2 mb-4 rounded"
        placeholder="Enter course overview"
      />

      <div className="flex justify-end gap-4">
        <Link
          to="/domain"
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </Link>
        <button
          type="submit"
          disabled={loading}
          className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </div>
    </form>
  );
};

export default EditCourseForm;
