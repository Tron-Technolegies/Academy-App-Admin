import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../pages/utils/constants";

const useDeleteCommunity = () => {
  const [loading, setLoading] = useState(false);

  const deleteCommunity = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(
        `${base_url}/community/deleteCommunity/${id}`
      );
      const data = res.data;
      toast.success("community deleted successfully");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, deleteCommunity };
};

export default useDeleteCommunity;
