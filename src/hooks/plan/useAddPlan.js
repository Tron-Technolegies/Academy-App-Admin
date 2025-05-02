import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../pages/utils/constants";

const useAddPlan = async ({}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addPlan = async ({ planName, price, features }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/plan`,
        {
          planName,
          price,
          features,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("Plan added successfully");
      navigate("/plan");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addPlan };
};

export default useAddPlan;
