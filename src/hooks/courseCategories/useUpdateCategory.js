import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../pages/utils/constants";

const useUpdateCategory = async () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateCategory = async ({ categoryName, id }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${base_url}/category/updateCategory/${id}`,
        {
          categoryName,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("category updated successfully");
      navigate("/category");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, updateCategory };
};

export default useUpdateCategory;
