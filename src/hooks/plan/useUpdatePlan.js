import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useUpdatePlan = async () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updatePlan = async ({ planName, price, features, id }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${base_url}/plan/${id}`,
        {
          planName,
          price,
          features,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("Plan updated successfully");
      navigate("/subscription");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, updatePlan };
};

export default useUpdatePlan;
