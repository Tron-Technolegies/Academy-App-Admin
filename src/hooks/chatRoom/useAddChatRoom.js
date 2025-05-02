import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../pages/utils/constants";

const useAddChatRoom = async ({}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addChatRoom = async ({
    chatRoomName,
    relatedCommunity,
    relatedSubCommunity,
  }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/chatRoom/addChatRoom`,
        {
          chatRoomName,
          relatedCommunity,
          relatedSubCommunity,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("ChatRoom  added successfully");
      navigate("/chatRoom ");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addChatRoom };
};

export default useAddChatRoom;
