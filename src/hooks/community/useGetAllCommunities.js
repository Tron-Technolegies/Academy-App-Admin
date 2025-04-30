import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../pages/utils/constants";

const useGetAllCommunity = () => {
  const [loading, setLoading] = useState(false);
  const [community, setCommunity] = useState([]);

  const getAllCommunities = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/community/getCommunities`, {
        withCredentials: true,
      });
      const data = res.data;
      setCommunity(data.community);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllCommunities();
  }, []);

  const refetch = () => {
    getAllCommunities();
  };

  return { loading, getAllCommunities, refetch };
};

export default useGetAllCommunity;
