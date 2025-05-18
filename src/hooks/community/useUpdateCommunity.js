import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useUpdateCommunity = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateCommunity = async ({ communityName, id }) => {
    setLoading(true);
    try {
      await axios.patch(
        `${base_url}/community/updateCommunity/${id}`,
        { communityName },
        { withCredentials: true }
      );
      toast.success("Community updated successfully");
      navigate("/community");
    } catch (err) {
      toast.error(err?.response?.data?.msg || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { loading, updateCommunity };
};

export default useUpdateCommunity;
