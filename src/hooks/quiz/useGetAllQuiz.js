import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useGetAllQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState([]);

  const getAllQuiz = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/quiz/getAllQuiz`, {
        withCredentials: true,
      });
      setQuiz(res.data);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllQuiz();
  }, []);

  const refetch = () => {
    getAllQuiz();
  };

  return { loading, quiz, refetch };
};

export default useGetAllQuiz;
