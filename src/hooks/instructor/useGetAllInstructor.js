import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";
import { toast } from "react-toastify"; // You forgot to import toast

const useGetAllInstructor = ({ search = "" } = {}) => {
  const [loading, setLoading] = useState(false);
  const [instructor, setInstructor] = useState([]);

  const getAllInstructor = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/instructor/getInstructor`, {
        params: { search },
        withCredentials: true,
      });
      console.log("received data:", res.data);
      setInstructor(res.data);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllInstructor();
  }, [search]);

  const refetch = () => {
    getAllInstructor();
  };

  return { loading, instructor, refetch };
};

export default useGetAllInstructor;
