import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useAddQuiz = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addQuiz = async ({
    name,
    time,
    courseCategory,
    relatedCourse,
    relatedModule,
    questions,
  }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/quiz/addQuiz`,
        {
          name,
          time,
          courseCategory,
          relatedCourse,
          relatedModule,
          questions,
        },
        { withCredentials: true }
      );
      toast.success("Quiz added successfully");
      navigate("/quiz");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, addQuiz };
};

export default useAddQuiz;
