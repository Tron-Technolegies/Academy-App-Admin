import { useState, useEffect } from "react";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useGetUserStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUserStats = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/admin/getUsers`, {
        withCredentials: true,
      });

      setStats(res.data);
    } catch (err) {
      console.error(
        err?.response?.data?.msg || err?.message || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserStats();
  }, []);

  const refetch = () => {
    getUserStats();
  };

  return { loading, stats, refetch };
};

export default useGetUserStats;
