import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useDeleteCourse = () => {
  const [loading, setLoading] = useState(false);

  const deleteCourse = async ({ id }) => {
    if (!id) {
      toast.error("Invalid course ID");
      return { success: false };
    }

    setLoading(true);
    try {
      const res = await axios.delete(`${base_url}/course/deleteCourse/${id}`, {
        withCredentials: true,
      });
      toast.success("Course deleted successfully");
      return { success: true, data: res.data };
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Something went wrong"
      );
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteCourse };
};

export default useDeleteCourse;
