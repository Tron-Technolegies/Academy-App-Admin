import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useAddInstructor = async ({}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addInstructor = async ({ instructorName, instructorRole }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/instructor/addInstructor`,
        {
          instructorName,
          instructorRole,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("instructor added successfully");
      navigate("/instructor");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addInstructor };
};

export default useAddInstructor;
