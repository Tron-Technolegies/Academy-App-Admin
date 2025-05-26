import React, { useState } from "react";

import useGetAllCourses from "../../../hooks/course/useGetAllCourses";
import useGetAllModule from "../../../hooks/module/useGetAllModule";
import useGetAllCategory from "../../../hooks/courseCategories/useGetAllCategory";

import FormInput from "../../FromInput";
import FormSelect from "../../FormSelect";
import { toast } from "react-toastify";
import useAddVideo from "../../../hooks/video/useAddVideo";
import { Link } from "react-router-dom";

const AddVideoForm = () => {
  const [name, setName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [module, setModule] = useState("");
  const [course, setCourse] = useState("");
  const [category, setCategory] = useState("");

  const { addVideo, loading: addingLoading } = useAddVideo();
  const { course: courses = [], loading: loadingCourses } = useGetAllCourses();
  const { module: modules = [], loading: loadingModules } = useGetAllModule();
  const { category: categories = [], loading: loadingCategories } =
    useGetAllCategory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !videoUrl.trim() || !course || !module || !category) {
      toast.error("Please fill out all fields.");
      return;
    }

    await addVideo({
      videoName: name,
      videoUrl,
      relatedCourse: course,
      relatedModule: module,
      relatedCategory: category,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <h4 className="text-[#4F4F4F] text-3xl p-6 font-semibold">Add Video</h4>

      <div className="max-w-150 h-auto py-6 px-6">
        <FormSelect
          title="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          list={courses}
          multi={false}
          displayField="courseName"
          className="w-full"
        />
        <FormSelect
          title="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          list={categories}
          multi={false}
          displayField="categoryName"
          className="w-full"
        />
        <FormSelect
          title="Module"
          value={module}
          onChange={(e) => setModule(e.target.value)}
          list={modules}
          multi={false}
          displayField="moduleName"
          className="w-full"
        />
        <FormInput
          label="Video Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full"
        />
        <FormInput
          label="Video URL"
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="max-w-190 px-6 flex justify-end gap-5">
        <Link
          to="/videos"
          className="bg-[#EEEDEE] text-[#858585] rounded-sm w-32 px-10 py-2.5 text-sm font-semibold hover:bg-[#EEEDEE] hover:scale-105 transition-transform duration-300"
        >
          Cancel
        </Link>
        <button
          className="bg-[#48089F] w-32 text-white rounded-sm px-4 py-2 text-sm font-semibold hover:bg-[#ba9fd6] hover:scale-105 transition-transform duration-300 disabled:opacity-50"
          type="submit"
          disabled={addingLoading}
        >
          {addingLoading ? "Adding..." : "Add"}
        </button>
      </div>
    </form>
  );
};

export default AddVideoForm;
