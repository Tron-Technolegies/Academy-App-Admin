import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../pages/utils/constants";

const useUpdateSubCommunity = async () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateSubCommunity = async ({
    subCommunityName,
    relatedCommunity,
    id,
  }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${base_url}/subCommunity/updateSubCommunity/${id}`,
        {
          subCommunityName,
          relatedCommunity,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("SubCommunity  updated successfully");
      navigate("/subCommunity ");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, updateSubCommunity };
};

export default useUpdateSubCommunity;
