// useAddVideo.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useAddVideo = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addVideo = async ({
    videoName,
    videoUrl,
    relatedCourse,
    relatedModule,
    relatedCategory,
  }) => {
    setLoading(true);
    try {
      await axios.post(
        `${base_url}/video/addVideo`,
        {
          videoName,
          videoURL: videoUrl, // note: videoURL is case-sensitive and must match what your backend expects
          relatedCourse,
          relatedModule,
          relatedCategory,
        },
        { withCredentials: true }
      );
      toast.success("Video added successfully");
      navigate("/videos");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, addVideo };
};

export default useAddVideo;
