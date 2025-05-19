import React, { useState } from "react";

import useAddVideo from "../../../hooks/video/useAddVideo";
import useGetAllCourses from "../../../hooks/course/useGetAllCourses";
import useGetAllModule from "../../../hooks/module/useGetAllModule";
import useGetAllCategory from "../../../hooks/courseCategories/useGetAllCategory";

import FormInput from "../../FromInput";
import FormSelect from "../../FormSelect";
import { toast } from "react-toastify";

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

      <div className="max-w-150 h-80 py-6 px-6 space-y-4">
        <FormSelect
          title="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          list={courses}
          multi={false}
          displayField="courseName"
        />
        <FormSelect
          title="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          list={categories}
          multi={false}
          displayField="categoryName"
        />
        <FormSelect
          title="Module"
          value={module}
          onChange={(e) => setModule(e.target.value)}
          list={modules}
          multi={false}
          displayField="moduleName"
        />
        <FormInput
          label="Video Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          label="Video URL"
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      </div>

      <div className="max-w-190 px-6 flex justify-end">
        <button
          className="bg-[#48089F] w-32 text-white rounded-sm px-3 py-2.5 text-sm font-semibold hover:bg-[#ba9fd6] hover:scale-105 transition-transform duration-300"
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
