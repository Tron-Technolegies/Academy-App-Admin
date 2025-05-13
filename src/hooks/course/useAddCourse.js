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
      // Log the data that will be sent
      console.log("Sending data to API:", {
        courseName,
        courseCategory,
        instructor,
        courseOverView,
      });

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

      // Log the response
      console.log("Course added successfully:", res.data);

      toast.success("Course added successfully");
      navigate("/domain/course");
    } catch (err) {
      // Log the error response
      console.error("Error while adding course:", err.response?.data);

      toast.error(
        err?.response?.data?.msg || err?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { addCourse, loading };
};

export default useAddCourse;
