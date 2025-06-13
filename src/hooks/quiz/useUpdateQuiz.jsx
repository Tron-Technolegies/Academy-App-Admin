import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useUpdateQuiz = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Update plan function
  const updateQuiz = async ({
    name,
    time,
    courseCategory,
    relatedCourse,
    relatedModule,
    questions,
    id,
  }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${base_url}/quiz/${id}`, // Update the endpoint
        { name, time, courseCategory, relatedCourse, relatedModule, questions },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("quiz updated successfully");
      navigate("/quiz"); // Redirect to subscription page
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, updateQuiz }; // Return loading and the updatePlan function
};

export default useUpdateQuiz;
