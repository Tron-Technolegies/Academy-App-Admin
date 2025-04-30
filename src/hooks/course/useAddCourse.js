import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { base_url } from "../../pages/utils/constants";

const useAddCourse = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addCourse = async ({
    courseName,
    courseCategory,
    instructor,
    courseOverview,
  }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/course/addCourse`,
        {
          courseName,
          courseCategory,
          instructor,
          courseOverview,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("course added successfully");
      navigate("/course");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
    return { loading, addCourse };
  };
};

export default useAddCourse;
