import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../pages/utils/constants";

const useGetAllSubCommunity = () => {
  const [loading, setLoading] = useState(false);
  const [subCommunity, setSubCommunity] = useState([]);

  const getAllSubCommunity = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/subCommunity/getSubCommunity`, {
        withCredentials: true,
      });
      const data = res.data;
      setSubCommunity(data.subCommunity);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllSubCommunity();
  }, []);

  const refetch = () => {
    getAllSubCommunity();
  };

  return { loading, subCommunity, refetch };
};

export default useGetAllSubCommunity;
