import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

const useGetSingleSubCommunity = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [subCommunity, setSubCommunity] = useState(null);

  const getSingleSubCommunity = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${base_url}/subCommunity/getSubCommunity/${id}/`,
        {
          withCredentials: true,
        }
      );
      const data = res.data;
      setSubCommunity(data);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleSubCommunity();
  }, []);
  return { loading, subCommunity };
};

export default useGetSingleSubCommunity;
