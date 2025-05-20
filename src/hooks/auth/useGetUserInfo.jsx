import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { base_url } from "../../constants";
import { AdminContext } from "../../AdminContext";
import { useNavigate } from "react-router-dom";

const useGetUserInfo = () => {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(AdminContext);
  const navigate = useNavigate();
  const getUserInfo = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/Admin_Profile`, {
        withCredentials: true,
      });
      const data = res.data;
      setUser(data);
    } catch (error) {
      console.log(error);
      // navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const refetch = () => {
    getUserInfo();
  };

  return { loading, user, refetch };
};

export default useGetUserInfo;
