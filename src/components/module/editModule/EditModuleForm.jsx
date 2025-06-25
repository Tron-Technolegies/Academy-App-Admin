import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import useGetAllCategory from "../../../hooks/courseCategories/useGetAllCategory";
import useGetAllCourses from "../../../hooks/course/useGetAllCourses";
import useGetSingleModule from "../../../hooks/module/useGetSingleModule";
import useUpdateModule from "../../../hooks/module/useUpdateModule";
import { toast } from "react-toastify";
import FormInput from "../../FromInput";
import FormSelect from "../../FormSelect";
import Loading from "../../Loading";

const EditModuleForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(""); // courseCategory id
  const [course, setCourse] = useState(""); // relatedCourse id
  const { id } = useParams();

  const { category: categories = [], loading: loadingCategories } =
    useGetAllCategory();
  const { course: courses = [], loading: loadingCourses } = useGetAllCourses();
  const { module, loading: loadingModule } = useGetSingleModule({ id });
  const { updateModule, loading: updating } = useUpdateModule();

  useEffect(() => {
    if (module) {
      setName(module.moduleName || "");
      setCourse(module.relatedCourse?._id || "");
      setCategory(module.relatedCourse?.courseCategory?._id || "");
    }
  }, [module]);

  const filteredCourses = courses.filter(
    (c) => c.courseCategory?._id === category
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !category || !course) {
      toast.error("Please fill out all fields.");
      return;
    }
    await updateModule({
      moduleName: name,
      courseCategory: category, // Updated key here
      relatedCourse: course,
      id,
    });
  };

  const isLoading =
    loadingModule || loadingCategories || loadingCourses || updating;
  if (isLoading) return <Loading />;

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <h4 className="text-[#4F4F4F] text-3xl p-6 font-semibold">Edit Module</h4>

      <div className="max-w-150 h-80 py-6 px-6">
        <FormSelect
          title="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          list={categories}
          multi={false}
          displayField="categoryName"
        />
        <FormSelect
          title="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          list={filteredCourses}
          multi={false}
          displayField="courseName"
        />
        <FormInput
          label="Module Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=""
        />
      </div>

      <div className="max-w-190 px-6 flex justify-end gap-5">
        <Link
          to="/domain/module"
          className="bg-[#EEEDEE] text-[#858585] rounded-sm w-32 px-10 py-2.5 text-sm font-semibold hover:bg-[#EEEDEE] hover:scale-105 transition-transform duration-300"
        >
          Cancel
        </Link>
        <button
          className="bg-[#48089F] w-32 text-white rounded-sm px-3 py-2.5 text-sm font-semibold hover:bg-[#ba9fd6] hover:scale-105 transition-transform duration-300"
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
