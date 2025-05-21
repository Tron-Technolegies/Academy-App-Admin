import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useUpdateCategory = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateCategory = async ({ categoryName, id }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${base_url}/category/updateCategory/${id}`,
        { categoryName },
        { withCredentials: true }
      );
      toast.success("Category updated successfully");
      navigate("/domain");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, updateCategory };
};

export default useUpdateCategory;
