import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

const useGetSingleModule = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [module, setModule] = useState(null);

  const getSingleModule = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/module/getModule/${id}/`, {
        withCredentials: true,
      });
      const data = res.data;
      setModule(data);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleModule();
  }, []);
  return { loading, module };
};

export default useGetSingleModule;
