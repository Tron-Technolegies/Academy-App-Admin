import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

const useGetSingleVideo = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState(null);

  const getSingleVideo = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/video/getVideo/${id}/`, {
        withCredentials: true,
      });
      const data = res.data;
      setVideo(data);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleVideo();
  }, [id]);
  return { loading, video };
};

export default useGetSingleVideo;
