import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useGetAllModule = ({ search = "" } = {}) => {
  // <-- default parameter fix here
  const [loading, setLoading] = useState(false);
  const [module, setModule] = useState([]);

  const getAllModule = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/module/getModule`, {
        params: { search },
        withCredentials: true,
      });
      const data = res.data;
      setModule(data);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllModule();
  }, [search]);

  const refetch = () => {
    getAllModule();
  };

  return { loading, module, refetch };
};

export default useGetAllModule;
