import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../pages/utils/constants";

const useGetAllCourse = () => {
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState([]);

  const getAllCourse = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/course/getCourse`, {
        withCredentials: true,
      });
      const data = res.data;
      setClasses(data.course);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllCourse();
  }, []);

  const refetch = () => {
    getAllCourse();
  };

  return { loading, course, refetch };
};

export default useGetAllCourse;
