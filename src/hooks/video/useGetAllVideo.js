import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useGetAllVideo = () => {
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState([]);

  const getAllVideo = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/video/getAllVideo`, {
        withCredentials: true,
      });
      const data = res.data;

      setVideo(data);
    } catch (err) {
      const message =
        err?.response?.data?.msg || err?.message || "Something went wrong";
      console.error(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllVideo();
  }, []);

  const refetch = () => {
    getAllVideo();
  };

  return { loading, video, refetch };
};

export default useGetAllVideo;
