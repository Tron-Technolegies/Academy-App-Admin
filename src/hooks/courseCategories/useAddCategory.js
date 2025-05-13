import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useAddCategory = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addCategory = async ({ categoryName }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/category/addCategory`,
        { categoryName },
        { withCredentials: true }
      );
      toast.success("Category added successfully");
      navigate("/domain"); // Redirect after success
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { addCategory, loading }; // Return both addCategory function and loading state
};

export default useAddCategory;
