import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../pages/utils/constants";

const useUpdateVideo = async () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateVideo = async ({
    videoName,
    videoURL,
    relatedModule,
    relatedCourse,
    id,
  }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${base_url}/video/updateVideo/${id}`,
        {
          videoName,
          videoURL,
          relatedModule,
          relatedCourse,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("Video  updated successfully");
      navigate("/video");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, updateVideo };
};

export default useUpdateVideo;
