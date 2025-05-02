import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../pages/utils/constants";

const useAddSubCommunity = async ({}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addSubCommunity = async ({ subCommunityName, relatedCommunity }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}//subCommunity/addSubCommunity`,
        {
          subCommunityName,
          relatedCommunity,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("SubCommunity added successfully");
      navigate("/subCommunity ");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addSubCommunity };
};

export default useAddSubCommunity;
