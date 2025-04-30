import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../pages/utils/constants";

const useUpdateCommunity = async () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateCommunity = async ({ communityName, id }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${base_url}/community/updateCommunity/${id}`,
        {
          communityName,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("community updated successfully");
      navigate("/community");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, updateCommunity };
};

export default useUpdateCommunity;
