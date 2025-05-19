import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useAddVideo = async ({}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addVideo = async ({
    videoName,
    videoURL,
    relatedModule,
    relatedCourse,
  }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/video/addVideo`,
        {
          videoName,
          videoURL,
          relatedModule,
          relatedCourse,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("Video added successfully");
      navigate("/video");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addVideo };
};

export default useAddVideo;
