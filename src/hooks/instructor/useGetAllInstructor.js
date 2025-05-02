import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../pages/utils/constants";

const useGetAllInstructor = () => {
  const [loading, setLoading] = useState(false);
  const [instructor, setInstructor] = useState([]);

  const getAllInstructor = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/instructor/getInstructor`, {
        withCredentials: true,
      });
      const data = res.data;
      setInstructor(data.instructor);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllInstructor();
  }, []);

  const refetch = () => {
    getAllInstructor();
  };

  return { loading, instructor, refetch };
};

export default useGetAllInstructor;
