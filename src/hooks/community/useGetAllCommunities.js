import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useGetAllCommunity = () => {
  const [loading, setLoading] = useState(false);
  const [community, setCommunity] = useState([]);

  const getAllCommunity = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/community/getCommunities`, {
        withCredentials: true,
      });
      const data = res.data;
      setCommunity(data);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCommunity();
  }, []);

  const refetch = () => {
    getAllCommunity();
  };

  return { loading, community, refetch };
};

export default useGetAllCommunity;
