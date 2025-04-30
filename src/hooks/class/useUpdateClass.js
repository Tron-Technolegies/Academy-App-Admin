import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../pages/utils/constants";

const useUpdateClass = async () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateClass = async ({ className, date, time, instructor, id }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${base_url}/class/updateClass/${id}`,
        {
          className,
          date,
          time,
          instructor,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("class updated successfully");
      navigate("/class");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, updateClass };
};

export default useUpdateClass;
