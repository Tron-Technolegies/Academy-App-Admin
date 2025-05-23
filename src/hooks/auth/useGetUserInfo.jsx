import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

import { AdminContext } from "../../utils/AdminContext";

const useGetUserInfo = () => {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(AdminContext);

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
      console.log(error);
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
