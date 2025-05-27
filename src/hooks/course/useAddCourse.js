import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useAddCourse = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addCourse = async ({
    courseName,
    courseCategory,
    instructor,
    courseOverView,
  }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/course/addCourse`,
        {
          courseName,
          courseCategory,
          instructor,
          courseOverView,
        },
        { withCredentials: true }
      );

      toast.success("Course added successfully");
      navigate("/domain/course");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { addCourse, loading };
};

export default useAddCourse;
