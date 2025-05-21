import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useUpdateModule = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateModule = async ({ moduleName, relatedCourse, id }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${base_url}/module/updateModule/${id}`,
        {
          moduleName,
          relatedCourse,
        },
        { withCredentials: true }
      );
      toast.success("Module updated successfully");
      navigate("/domain/module");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, updateModule };
};

export default useUpdateModule;
