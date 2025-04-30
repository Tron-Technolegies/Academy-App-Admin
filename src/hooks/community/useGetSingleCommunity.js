import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../pages/utils/constants";

const useGetSingleCommunity = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [community, setCommunity] = useState(null);

  const getSingleCommunity = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${base_url}/community/getSingleClass/${id}/`,
        {
          withCredentials: true,
        }
      );
      const data = res.data;
      setClasses(data);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleCommunity();
  }, []);
  return { loading, community };
};

export default useGetSingleCommunity;
