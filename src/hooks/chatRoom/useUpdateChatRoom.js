import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../pages/utils/constants";

const useUpdateChatRoom = async () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateChatRoom = async ({
    chatRoomName,
    relatedCommunity,
    relatedSubCommunity,
    id,
  }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${base_url}/chatRoom /updateChatRoom /${id}`,
        {
          chatRoomName,
          relatedCommunity,
          relatedSubCommunity,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("chat Room updated successfully");
      navigate("/class");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, updateChatRoom };
};

export default useUpdateChatRoom;
