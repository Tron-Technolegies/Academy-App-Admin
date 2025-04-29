import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../pages/utils/constants";

const useGetAllClasses = () => {
  const [loading, setLoading] = useState(false);
  const [classes, setClasses] = useState([]);

  const getAllClasses = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/getAllClass`, {
        withCredentials: true,
      });
      const data = res.data;
      setClasses(data.class);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllClasses();
  }, []);

  const refetch = () => {
    getAllClasses();
  };

  return { loading, classes, refetch };
};

export default useGetAllClasses;
