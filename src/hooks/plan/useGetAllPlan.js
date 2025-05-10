import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useGetAllPlan = () => {
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState([]);

  const getAllPlan = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/plan`, {
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
    getAllPlan();
  }, []);

  const refetch = () => {
    getAllPlan();
  };

  return { loading, plan, refetch };
};

export default useGetAllPlan;
