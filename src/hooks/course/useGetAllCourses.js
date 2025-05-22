import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useGetAllCourses = ({ search = "" } = {}) => {
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState([]);

  const getAllCourses = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/course/getCourse`, {
        params: { search },
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
    getAllCourses();
  }, [search]);

  const refetch = () => {
    getAllCourses();
  };

  return { loading, course, refetch };
};

export default useGetAllCourses;
