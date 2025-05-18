import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useGetAllChatRoom = () => {
  const [loading, setLoading] = useState(false);
  const [chatRoom, setChatRoom] = useState([]);

  const getAllChatRoom = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/chatRoom/getAllChatRoom`, {
        withCredentials: true,
      });
      const data = res.data;
      console.log("API response data:", data);
      setChatRoom(data);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllChatRoom();
  }, []);

  const refetch = () => {
    getAllChatRoom();
  };

  return { loading, chatRoom, refetch };
};

export default useGetAllChatRoom;
