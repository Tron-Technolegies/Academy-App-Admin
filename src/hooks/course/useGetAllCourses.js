import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useGetAllCourses = () => {
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState([]);

  const getAllCourses = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/course/getCourse`, {
        withCredentials: true,
      });
      const data = res.data;
      setCourse(data);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllCourses();
  }, []);

  const refetch = () => {
    getAllCourses();
  };

  return { loading, course, refetch };
};

export default useGetAllCourses;
