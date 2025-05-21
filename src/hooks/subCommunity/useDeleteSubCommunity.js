import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../utils/constants";

const useDeleteSubCommunity = () => {
  const [loading, setLoading] = useState(false);

  const deleteSubCommunity = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(
        `${base_url}/subCommunity/deleteSubCommunity/${id}/`,
        {
          withCredentials: true,
        }
      );
      toast.success("Sub Community Successfully Deleted");
      return res.data; // return something to signal success
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.error || "something went wrong"
      );
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteSubCommunity };
};

export default useDeleteSubCommunity;
