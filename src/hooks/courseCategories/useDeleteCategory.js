import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../pages/utils/constants";

const useDeleteCategory = () => {
  const [loading, setLoading] = useState(false);

  const deleteCategory = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(
        `${base_url}/category/deleteCategory/${id}/`
      );
      const data = res.data;
      toast.success("Category Successfully Deleted");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, deleteCategory };
};

export default useDeleteCategory;
