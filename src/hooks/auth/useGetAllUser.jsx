import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useGetAllUser = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

  const getAllUser = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/user/getAllUser`, {
        withCredentials: true,
      });
      const data = res.data;

      setUser(data);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllUser();
  }, []);

  const refetch = () => {
    getAllUser();
  };

  return { loading, user, refetch };
};

export default useGetAllUser;
