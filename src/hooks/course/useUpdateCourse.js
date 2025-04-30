import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../pages/utils/constants";

const useUpdateCourse = async () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateCourse = async ({
    courseName,
    courseCategory,
    instructor,
    courseOverview,
    id,
  }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${base_url}/course/updateCourse/${id}`,
        {
          courseName,
          courseCategory,
          instructor,
          courseOverview,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("course updated successfully");
      navigate("/course");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, updateCourse };
};

export default useUpdateCourse;
