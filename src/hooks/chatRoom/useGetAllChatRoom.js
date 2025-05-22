import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useGetAllChatRoom = ({ search = "" } = {}) => {
  const [loading, setLoading] = useState(false);
  const [chatRoom, setChatRoom] = useState([]);

  const getAllChatRoom = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/chatRoom/getAllChatRoom`, {
        params: { search },
        withCredentials: true,
      });
      const data = res.data;

      setChatRoom(data);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllChatRoom();
  }, [search]);

  const refetch = () => {
    getAllChatRoom();
  };

  return { loading, chatRoom, refetch };
};

export default useGetAllChatRoom;
