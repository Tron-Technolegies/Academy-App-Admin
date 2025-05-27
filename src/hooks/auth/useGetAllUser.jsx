import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useGetAllUser = ({ search = "" } = {}) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

  const getAllUser = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/user/getAllUser`, {
        params: { search },
        withCredentials: true,
      });
      const data = res.data;

      setUser(data);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllUser();
  }, [search]);

  const refetch = () => {
    getAllUser();
  };

  return { loading, user, refetch };
};

export default useGetAllUser;
