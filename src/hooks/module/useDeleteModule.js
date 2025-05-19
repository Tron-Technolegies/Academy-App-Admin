import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useDeleteModule = () => {
  const [loading, setLoading] = useState(false);

  const deleteModule = async ({ id }) => {
    console.log("Starting deleteModule with id:", id);
    setLoading(true);
    try {
      const url = `${base_url}/module/deleteModule/${id}`;
      console.log("Calling DELETE URL:", url);

      const res = await axios.delete(url, {
        withCredentials: true,
      });

      console.log("Delete response:", res);
      const data = res.data;

      toast.success("Module Successfully Deleted");
      return data;
    } catch (err) {
      console.error("Delete module error:", err);
      toast.error(
        err?.response?.data?.msg || err?.error || "Something went wrong"
      );
    } finally {
      setLoading(false);
      console.log("Delete operation finished");
    }
  };

  return { loading, deleteModule };
};

export default useDeleteModule;
