import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

const useGetSinglePlan = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);

  const getSinglePlan = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/plan/${id}/`, {
        withCredentials: true,
      });
      const data = res.data;
      setPlan(data);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSinglePlan();
  }, []);
  return { loading, plan };
};

export default useGetSinglePlan;
