import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useUpdatePlan = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Update plan function
  const updatePlan = async ({ planName, price, features, id }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${base_url}/plan/${id}`, // Update the endpoint
        { planName, price, features },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("Plan updated successfully");
      navigate("/subscription"); // Redirect to subscription page
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "Something went wrong"
      ); // Corrected error function
    } finally {
      setLoading(false);
    }
  };

  return { loading, updatePlan }; // Return loading and the updatePlan function
};

export default useUpdatePlan;
