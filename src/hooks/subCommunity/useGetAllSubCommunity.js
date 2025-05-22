import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useGetAllSubCommunity = ({ search = "" } = {}) => {
  const [loading, setLoading] = useState(false);
  const [subCommunity, setSubCommunity] = useState([]);

  const getAllSubCommunity = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/subCommunity/getSubCommunity`, {
        params: { search },
        withCredentials: true,
      });
      const data = res.data;
      setSubCommunity(data);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
      toast.error(
        err?.response?.data?.message || "Failed to load sub communities"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllSubCommunity();
  }, [search]);

  const refetch = () => {
    getAllSubCommunity();
  };

  return { loading, subCommunity, refetch };
};

export default useGetAllSubCommunity;
