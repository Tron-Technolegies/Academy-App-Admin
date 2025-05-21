import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useDeleteChatRoom = () => {
  const [loading, setLoading] = useState(false);

  const deleteChatRoom = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(
        `${base_url}/chatRoom/deleteChatRoom/${id}/`,
        {
          withCredentials: true,
        }
      );
      const data = res.data;
      toast.success("Chat Room Successfully Deleted");
    } catch (err) {
      toast.err(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, deleteChatRoom };
};

export default useDeleteChatRoom;
