import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useDeleteCourse = () => {
  const [loading, setLoading] = useState(false);

  const deleteCourse = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(`${base_url}/course/deleteCourse/${id}`);
      const data = res.data;
      toast.success("course deleted successfully");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, deleteCourse };
};

export default useDeleteCourse;
