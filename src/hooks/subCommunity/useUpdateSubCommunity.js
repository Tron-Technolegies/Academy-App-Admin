import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useUpdateSubCommunity = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateSubCommunity = async ({
    subCommunityName,
    relatedCommunity,
    id,
  }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${base_url}/subCommunity/updateSubCommunity/${id}`,
        {
          subCommunityName,
          relatedCommunity,
        },
        { withCredentials: true }
      );
      toast.success("Sub Community updated successfully");
      navigate("/community/subCommunity");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, updateSubCommunity };
};

export default useUpdateSubCommunity;
