import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useDeleteModule = () => {
  const [loading, setLoading] = useState(false);

  const deleteModule = async ({ id }) => {
    setLoading(true);
    try {
      const url = `${base_url}/module/deleteModule/${id}`;

      const res = await axios.delete(url, {
        withCredentials: true,
      });

      const data = res.data;

      toast.success("Module Successfully Deleted");
      return data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteModule };
};

export default useDeleteModule;
