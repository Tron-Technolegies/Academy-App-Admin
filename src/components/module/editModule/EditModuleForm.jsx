import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import FormInput from "../../FromInput";
import FormSelect from "../../FormSelect";
import useGetAllCategory from "../../../hooks/courseCategories/useGetAllCategory";
import useGetAllCourses from "../../../hooks/course/useGetAllCourses";
import useGetSingleModule from "../../../hooks/module/useGetSingleModule";
import useUpdateModule from "../../../hooks/module/useUpdateModule";

const EditModuleForm = () => {
  const { id } = useParams(); // module id from URL

  const [moduleName, setModuleName] = useState("");
  const [category, setCategory] = useState("");
  const [course, setCourse] = useState("");
  const [error, setError] = useState("");

  const { category: categories, loading: categoriesLoading } =
    useGetAllCategory();
  const { course: courses, loading: loadingCourses } = useGetAllCourses();
  const { module, loading: loadingModule } = useGetSingleModule(id);
  const { updateModule, loading: updating } = useUpdateModule();

  // Populate form fields when module data is loaded
  useEffect(() => {
    if (module) {
      setModuleName(module.moduleName || "");

      // Assuming module.courseCategory is the category ID or object with _id
      setCategory(
        typeof module.courseCategory === "string"
          ? module.courseCategory
          : module.courseCategory?._id || ""
      );

      // Assuming module.courseName or module.relatedCourse is course ID or object with _id
      setCourse(
        typeof module.relatedCourse === "string"
          ? module.relatedCourse
          : module.relatedCourse?._id || ""
      );
    }
  }, [module]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!moduleName || !course || !category) {
      setError("Please fill out all required fields.");
      return;
    }

    await updateModule({
      id,
      moduleName,
      relatedCourse: course,
    });
  };

  if (categoriesLoading || loadingCourses || loadingModule) {
    return <p className="text-center py-8">Loading form data...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="pt-4 max-w-lg mx-auto">
      <h4 className="text-[#4F4F4F] text-3xl p-6 font-semibold">Edit Module</h4>

      {error && <p className="text-red-500 mb-4 px-6">{error}</p>}

      <div className="p-6 space-y-4">
        <FormSelect
          title="Domain"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          list={categories}
          multi={false}
          displayField="categoryName"
          valueField="_id"
          placeholder="Select a category"
        />

        <FormSelect
          title="Course Name"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          list={courses}
          multi={false}
          displayField="courseName"
          valueField="_id"
          placeholder="Select a course"
        />

        <FormInput
          label="Module Name"
          type="text"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          placeholder="Enter module name"
        />
      </div>

      <div className="px-6 flex justify-end gap-3">
        <Link
          to="/modules"
          className="bg-gray-300 text-gray-800 rounded px-4 py-2 hover:bg-gray-400"
        >
          Cancel
        </Link>

        <button
          className="bg-purple-700 text-white rounded px-4 py-2 hover:bg-purple-800"
          type="submit"
          disabled={updating}
        >
          {updating ? "Updating..." : "Update"}
        </button>
      </div>
    </form>
  );
};

export default EditModuleForm;
