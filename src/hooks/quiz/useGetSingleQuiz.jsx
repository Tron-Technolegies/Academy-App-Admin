import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

const useGetSingleQuiz = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState(null);

  const getSingleQuiz = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/quiz/${id}/`, {
        withCredentials: true,
      });
      const data = res.data;
      setQuiz(data);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleQuiz();
  }, []);
  return { loading, quiz };
};

export default useGetSingleQuiz;
