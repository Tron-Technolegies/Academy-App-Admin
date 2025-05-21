import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useGetSingleChatRoom = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [chatRoom, setChatRoom] = useState(null);

  const getSingleChatRoom = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${base_url}/chatRoom/getSingleChatRoom/${id}`,
        {
          withCredentials: true,
        }
      );
      setChatRoom(res.data);
    } catch (err) {
      console.error(err);
      toast.error(
        err?.response?.data?.message || err?.error || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getSingleChatRoom();
    }
  }, [id]);

  return { loading, chatRoom };
};

export default useGetSingleChatRoom;
