import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useDeleteInstructor = () => {
  const [loading, setLoading] = useState(false);

  const deleteInstructor = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(
        `${base_url}/instructor/deleteInstructor/${id}/`,
        {
          withCredentials: true,
        }
      );
      toast.success("Instructor Successfully Deleted");
      return { success: true, data: res.data };
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.message || "Something went wrong"
      );
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteInstructor };
};

export default useDeleteInstructor;
