import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../pages/utils/constants";

const useAddModule = async ({}) => {
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
      const data = res.data;
      toast.success("Module added successfully");
      navigate("/module");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addModule };
};

export default useAddModule;
