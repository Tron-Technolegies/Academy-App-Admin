import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";
import { AdminContext } from "../../utils/AdminContext";

const useDeleteCategory = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AdminContext);

  const deleteCategory = async ({ id }) => {
    setLoading(true);
    try {
      console.log("Token used for deletion:", user?.token);

      const res = await axios.delete(
        `${base_url}/category/deleteCategory/${id}/`,
        {
          withCredentials: true,
        }
      );
      toast.success("Category Successfully Deleted");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteCategory };
};

export default useDeleteCategory;
