import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../pages/utils/constants";

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
      setVideo(data.video);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
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
