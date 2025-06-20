import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useGetSingleCategory = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(null);

  const getSingleCategory = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/category/getCategories/${id}/`, {
        withCredentials: true,
      });
      const data = res.data;
      setCategory(data);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleCategory();
  }, []);
  return { loading, category };
};

export default useGetSingleCategory;
