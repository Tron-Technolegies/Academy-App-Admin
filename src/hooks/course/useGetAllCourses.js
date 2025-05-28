import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useGetAllCourses = ({ search = "" } = {}) => {
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState([]);

  // Changed to useCallback and include search in dependency:
  // This ensures the function is stable but updates when `search` changes
  const getAllCourses = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/course/getCourse`, {
        params: { search }, // <-- send current search here
        withCredentials: true,
      });
      setCourse(res.data);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [search]); // <-- added `search` here

  // Effect depends on getAllCourses (which depends on search)
  useEffect(() => {
    getAllCourses();
  }, [getAllCourses]);

  // Refetch simply calls the latest getAllCourses
  const refetch = useCallback(() => {
    getAllCourses();
  }, [getAllCourses]);

  return { loading, course, refetch };
};

export default useGetAllCourses;
