import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useAddCommunity = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addCommunity = async ({ communityName }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/community/addCommunity`,
        {
          communityName,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("community added successfully");
      navigate("/community");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addCommunity };
};

export default useAddCommunity;
