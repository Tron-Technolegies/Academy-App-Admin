import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

const useGetAllInstructor = ({ search } = {}) => {
  const [loading, setLoading] = useState(false);
  const [instructor, setInstructor] = useState([]);

  const getAllInstructor = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/instructor/getInstructor`, {
        params: {
          search,
        },
        withCredentials: true,
      });

      setInstructor(res.data);
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
  }, [search]);

  const refetch = () => {
    getAllInstructor();
  };

  return { loading, instructor, refetch };
};

export default useGetAllInstructor;
