import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

import { AdminContext } from "../../utils/AdminContext";
import { useNavigate } from "react-router-dom";

const useGetUserInfo = () => {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(AdminContext);
  const navigate = useNavigate();

  const getUserInfo = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/user/userInfo`, {
        withCredentials: true,
      });
      const data = res.data;

      // IMPORTANT: setUser to the nested user object directly
      setUser(data.user);
    } catch (error) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (user && user.role !== "admin") {
      navigate("/login");
    }
  }, [user]);

  const refetch = () => {
    getUserInfo();
  };

  return { loading, user, refetch };
};

export default useGetUserInfo;
