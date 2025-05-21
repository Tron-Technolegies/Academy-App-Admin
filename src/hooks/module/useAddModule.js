import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useAddModule = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addModule = async ({ moduleName, relatedCourse }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/module/addModule`,
        {
          moduleName,
          relatedCourse,
        },
        { withCredentials: true }
      );
      toast.success("Module added successfully");
      navigate("/domain/module");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, addModule };
};

export default useAddModule;
