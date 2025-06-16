import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useGetSingleQuiz = (id) => {
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const getSingleQuiz = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${base_url}/quiz/getQuiz/${id}`, {
          withCredentials: true,
        });
        setQuiz(res.data);
      } catch (err) {
        toast.error(
          err?.response?.data?.message || err?.message || "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getSingleQuiz(); // Prefetch only if ID is valid
    }
  }, [id]);

  return { loading, quiz };
};

export default useGetSingleQuiz;
