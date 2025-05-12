import axios from "axios";
import React, { useEffect, useState } from "react";

import { base_url } from "../../utils/constants";

const useGetAllModule = () => {
  const [loading, setLoading] = useState(false);
  const [module, setModule] = useState([]);

  const getAllModule = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/module/getModule`, {
        withCredentials: true,
      });
      const data = res.data;
      setModule(data);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllModule();
  }, []);

  const refetch = () => {
    getAllModule();
  };

  return { loading, module, refetch };
};

export default useGetAllModule;
