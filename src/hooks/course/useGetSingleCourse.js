import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

const useGetSingleCourse = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState(null);

  const getSingleCourse = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/course/getCourse/${id}/`, {
        withCredentials: true,
      });
      const data = res.data;
      setCourse(data);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleCourse();
  }, []);
  return { loading, course };
};

export default useGetSingleCourse;
