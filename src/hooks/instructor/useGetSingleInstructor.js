import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";
import { toast } from "react-toastify";

const useGetSingleInstructor = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [instructor, setInstructor] = useState(null);

  useEffect(() => {
    if (id) getSingleInstructor();
  }, [id]);

  const getSingleInstructor = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${base_url}/instructor/getInstructor/${id}/`,
        {
          withCredentials: true,
        }
      );
      setInstructor(res.data);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, instructor };
};

export default useGetSingleInstructor;
