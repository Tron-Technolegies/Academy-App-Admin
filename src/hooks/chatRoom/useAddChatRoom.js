import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useAddChatRoom = () => {
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
      toast.success("Chat Room added successfully");
      navigate("/community/chatRoom");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, addChatRoom };
};

export default useAddChatRoom;
