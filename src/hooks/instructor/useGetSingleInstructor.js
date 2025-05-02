import axios from "axios";
import React, { useEffect, useState } from "react";

import { base_url } from "../../pages/utils/constants";

const useGetSingleInstructor = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [instructor, setInstructor] = useState(null);

  const getSingleInstructor = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${base_url}/instructor/getInstructor/${id}/`,
        {
          withCredentials: true,
        }
      );
      const data = res.data;
      setInstructor(data);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleInstructor();
  }, []);
  return { loading, instructor };
};

export default useGetSingleInstructor;
