import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../pages/utils/constants";

const useDeleteSubCommunity = () => {
  const [loading, setLoading] = useState(false);

  const deleteSubCommunity = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(
        `${base_url}/subCommunity/deleteSubCommunity/${id}/`
      );
      const data = res.data;
      toast.success("SubCommunity Successfully Deleted");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, deleteSubCommunity };
};

export default useDeleteSubCommunity;
