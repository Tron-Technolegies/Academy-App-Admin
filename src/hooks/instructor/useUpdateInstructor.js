import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../pages/utils/constants";

const useUpdateInstructor = async () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateInstructor = async ({ instructorName, instructorRole, id }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${base_url}/instructor/updateInstructor/${id}`,
        {
          instructorName,
          instructorRole,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("Instructor updated successfully");
      navigate("/instructor");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, updateInstructor };
};

export default useUpdateInstructor;
