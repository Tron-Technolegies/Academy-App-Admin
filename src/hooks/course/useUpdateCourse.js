import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";

const useUpdateCourse = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateCourse = async ({
    courseName,
    courseCategory,
    instructor,
    courseOverView,
    id,
  }) => {
    setLoading(true);
    try {
      // Send the PATCH request to update the course
      const response = await axios.patch(
        `${base_url}/course/updateCourse/${id}`,
        {
          courseName,
          courseCategory,
          instructor,
          courseOverView,
        },
        { withCredentials: true } // For handling cookies or sessions
      );

      toast.success("Course updated successfully");
      navigate("/domain/course");
    } catch (err) {
      // Handle error response
      if (err?.response) {
        toast.error(
          err?.response?.data?.msg ||
            "Something went wrong with the course update."
        );
      } else {
        // In case of network issues or if no response is received
        toast.error("Network error or no response from the server.");
      }
    } finally {
      // Set loading to false after the request is completed (success or error)
      setLoading(false);
    }
  };

  return { loading, updateCourse };
};

export default useUpdateCourse;
