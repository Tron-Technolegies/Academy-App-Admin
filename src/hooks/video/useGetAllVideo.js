import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useGetAllVideo = ({ search = "" } = {}) => {
  // <-- add default parameter here
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState([]);

  const getAllVideo = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/video/getAllVideo`, {
        withCredentials: true,
        params: { search },
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
    getAllVideo();
  }, [search]);

  const refetch = () => {
    getAllVideo();
  };

  return { loading, video, refetch };
};

export default useGetAllVideo;
