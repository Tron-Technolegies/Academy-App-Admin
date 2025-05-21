import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useUpdateInstructor = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateInstructor = async ({
    fullName,
    email,
    password,
    phoneNumber,
    gender,
    designation,
    id,
  }) => {
    setLoading(true);
    try {
      const payload = {
        fullName,
        email,
        phoneNumber,
        gender: gender.toLowerCase(),
        designation,
      };

      // Only add password if it's non-empty
      if (password && password.trim() !== "") {
        payload.password = password;
      }
      const res = await axios.patch(
        `${base_url}/instructor/updateInstructor/${id}`,
        {
          fullName,
          email,
          password,
          phoneNumber,
          gender: gender.toLowerCase(),
          designation,
        },
        { withCredentials: true }
      );
      toast.success("Instructor updated successfully");
      navigate("/teachers");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, updateInstructor };
};

export default useUpdateInstructor;
