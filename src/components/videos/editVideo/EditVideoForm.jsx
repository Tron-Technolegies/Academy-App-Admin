import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useGetAllCourses from "../../../hooks/course/useGetAllCourses";
import useGetAllModule from "../../../hooks/module/useGetAllModule";
import useGetAllCategory from "../../../hooks/courseCategories/useGetAllCategory";

import FormInput from "../../FromInput";
import FormSelect from "../../FormSelect";
import useUpdateVideo from "../../../hooks/video/useUpdateVideo";
import useGetSingleVideo from "../../../hooks/video/useGetSingleVideo";
import Loading from "../../Loading";
import { toast } from "react-toastify";

const EditVideoForm = () => {
  const { id } = useParams();
  const { video, loading: videoLoading } = useGetSingleVideo({ id });

  const { course: courses = [], loading: loadingCourses } = useGetAllCourses();
  const { module: modules = [], loading: loadingModules } = useGetAllModule();
  const { category: categories = [], loading: loadingCategories } =
    useGetAllCategory();

  const { updateVideo, loading: updateLoading } = useUpdateVideo();

  const [name, setName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [module, setModule] = useState("");
  const [course, setCourse] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (video) {
      setName(video.videoName || "");
      setVideoUrl(video.videoURL || "");
      setCourse(video.relatedCourse?._id || "");
      setModule(video.relatedModule?._id || "");
      setCategory(video.relatedCourse?.courseCategory?._id || "");
    }
  }, [video]);

  const filteredCourses = courses.filter(
    (c) => c.courseCategory?._id === (category || "")
  );

  const filteredModules = modules.filter(
    (mod) => mod.relatedCourse && mod.relatedCourse._id === (course || "")
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !videoUrl.trim() || !course || !module || !category) {
      toast.error("Please fill out all fields.");
      return;
    }

    await updateVideo({
      id: video._id,
      videoName: name,
      videoURL: videoUrl,
      relatedCourse: course,
      relatedModule: module,
      relatedCategory: category,
    });
  };

  const isLoading =
    loadingModules || loadingCategories || loadingCourses || updateLoading;
  if (isLoading) return <Loading />;

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <h4 className="text-[#4F4F4F] text-3xl p-6 font-semibold">Edit Video</h4>

      <div className="max-w-150 h-auto py-6 px-6">
        <FormSelect
          title="Category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setCourse(""); // Reset course selection when category changes
            setModule(""); // Reset module selection when category changes too
          }}
          list={categories}
          multi={false}
          displayField="categoryName"
          className="w-full"
        />

        <FormSelect
          title="Course"
          value={course}
          onChange={(e) => {
            setCourse(e.target.value);
            setModule(""); // Reset module selection when course changes
          }}
          list={filteredCourses}
          multi={false}
          displayField="courseName"
          className="w-full"
        />

        <FormSelect
          title="Module"
          value={module}
          onChange={(e) => setModule(e.target.value)}
          list={filteredModules}
          multi={false}
          displayField="moduleName"
          className="w-full"
        />
        <FormInput
          label="Video Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=""
          className="w-full"
        />
        <FormInput
          label="Video URL"
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder=""
          className="w-full"
        />
      </div>

      {/* Button sticks to bottom right */}
      <div className="max-w-190 px-6 flex justify-end gap-5">
        <Link
          to="/videos"
          className="bg-[#EEEDEE] text-[#858585] rounded-sm w-32 sm:w-32 px-10 py-2.5 text-sm font-semibold hover:bg-[#EEEDEE] hover:scale-105 transition-transform duration-300 text-center"
        >
          Cancel
        </Link>
        <button
          className="bg-[#48089F] w-32 sm:w-32 text-white rounded-sm px-3 py-2.5 text-sm font-semibold hover:bg-[#ba9fd6] hover:scale-105 transition-transform duration-300"
          type="submit"
          disabled={updateLoading}
        >
          {updateLoading ? "Updating..." : "Update"}
        </button>
      </div>
    </form>
  );
};

export default EditVideoForm;
