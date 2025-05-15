import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useAddInstructor = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addInstructor = async ({
    fullName,
    email,
    password,
    phoneNumber,
    gender,
    designation,
  }) => {
    setLoading(true);

    try {
      const res = await axios.post(
        `${base_url}/instructor/addInstructor`,
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
      toast.success("Instructor added successfully");
      navigate("/teachers");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, addInstructor };
};

export default useAddInstructor;
