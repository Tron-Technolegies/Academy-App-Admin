import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useAddPlan = () => {
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
      toast.success("Plan added successfully");
      navigate("/subscription");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, addPlan };
};

export default useAddPlan;
