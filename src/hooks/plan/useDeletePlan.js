import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";
import { AdminContext } from "../../utils/AdminContext";

const useDeletePlan = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AdminContext);

  const deletePlan = async ({ id }) => {
    if (!id) {
      console.error("DeletePlan error: Invalid plan ID");
      toast.error("Invalid plan ID");
      return;
    }

    const url = `${base_url}/plan/${id}/`;
    console.log("Deleting plan with URL:", url);

    setLoading(true);
    try {
      const res = await axios.delete(url, {
        withCredentials: true,
      });
      console.log("Delete plan response:", res);
      toast.success("Plan deleted successfully");
      return { success: true, data: res.data };
    } catch (err) {
      console.error("Delete plan error:", err.response || err.message || err);
      toast.error(
        err?.response?.data?.msg || err?.message || "Something went wrong"
      );
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { loading, deletePlan };
};

export default useDeletePlan;
