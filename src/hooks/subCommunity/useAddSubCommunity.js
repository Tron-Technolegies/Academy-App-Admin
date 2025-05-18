import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useAddSubCommunity = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addSubCommunity = async ({ subCommunityName, relatedCommunity }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/subCommunity/addSubCommunity`,
        { subCommunityName, relatedCommunity },
        { withCredentials: true }
      );
      toast.success("Sub Community added successfully");
      navigate("/community/subCommunity");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, addSubCommunity };
};

export default useAddSubCommunity;
