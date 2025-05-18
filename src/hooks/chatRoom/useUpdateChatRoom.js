import { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useUpdateChatRoom = () => {
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
        `${base_url}/chatRoom/updateAllChatRoom/${id}`,
        {
          chatRoomName,
          relatedCommunity,
          relatedSubCommunity,
        },
        { withCredentials: true }
      );
      toast.success("Chat room updated successfully");
      navigate("/community/chatRoom");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, updateChatRoom };
};

export default useUpdateChatRoom;
