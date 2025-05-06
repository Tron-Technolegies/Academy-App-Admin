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
        `${base_url}/instructor/deleteInstructor/${id}/`
      );
      const data = res.data;
      toast.success("Instructor Successfully Deleted");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, deleteInstructor };
};

export default useDeleteInstructor;
