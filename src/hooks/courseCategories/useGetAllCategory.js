import axios from "axios";
import React, { useEffect, useState } from "react";

import { base_url } from "../../utils/constants";

const useGetAllCategory = () => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);

  const getAllCategory = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/category/getCategories`, {
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
    getAllCategory();
  }, []);

  const refetch = () => {
    getAllCategory();
  };

  return { loading, category, refetch };
};

export default useGetAllCategory;
