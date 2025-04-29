import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../pages/utils/constants";

const useDeleteClass = () => {
  const [loading, setLoading] = useState(false);

  const deleteClass = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(`${base_url}/class/deleteClass/${id}/`);
      const data = res.data;
      toast.success("Class Successfully Deleted");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, deleteClass };
};

export default useDeleteClass;
