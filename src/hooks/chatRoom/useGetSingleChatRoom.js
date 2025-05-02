import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../pages/utils/constants";

const useGetSingleChatRoom = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [chatRoom, setChatRoom] = useState(null);

  const getSingleChatRoom = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${base_url}/chatRoom /getSingleChatRoom/${id}/`,
        {
          withCredentials: true,
        }
      );
      const data = res.data;
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
    getSingleChatRoom();
  }, []);
  return { loading, chatRoom };
};

export default useGetSingleChatRoom;
