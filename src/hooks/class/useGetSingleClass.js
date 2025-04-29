import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../pages/utils/constants";

const useGetSingleClass = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [classes, setClasses] = useState(null);

  const getSingleClass = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/class/getSingleClass/${id}/`, {
        withCredentials: true,
      });
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
    getSingleClass();
  }, []);
  return { loading, classes };
};

export default useGetSingleClass;
