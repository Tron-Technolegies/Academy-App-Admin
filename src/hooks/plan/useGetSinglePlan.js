import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../pages/utils/constants";

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
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
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
