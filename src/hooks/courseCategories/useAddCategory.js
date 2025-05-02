import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../pages/utils/constants";

const useAddCategory = async ({}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addCategory = async ({ categoryName }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/category/addCategory`,
        {
          categoryName,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("category added successfully");
      navigate("/category");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addCategory };
};

export default useAddCategory;
