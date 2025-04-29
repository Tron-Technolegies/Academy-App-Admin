import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../pages/utils/constants";

const useAddClass = async ({}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addClass = async ({ className, date, time, instructor }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/addClass`,
        {
          className,
          date,
          time,
          instructor,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("class added successfully");
      navigate("/class");
    } catch (error) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addClass };
};

export default useAddClass;
