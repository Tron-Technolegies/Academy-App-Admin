import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useDeleteVideo = () => {
  const [loading, setLoading] = useState(false);

  const deleteVideo = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(`${base_url}/video/deleteVideo/${id}/`, {
        withCredentials: true,
      });
      const data = res.data;
      toast.success("Video Successfully Deleted");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, deleteVideo };
};

export default useDeleteVideo;
