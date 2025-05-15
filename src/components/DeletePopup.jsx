import React, { useContext } from "react";
import { motion } from "framer-motion";

import Loading from "./Loading";
import { AdminContext } from "../utils/AdminContext";
import useDeleteCategory from "../hooks/courseCategories/useDeleteCategory";

export default function DeletePopup({ setPopup }) {
  const { deleteId, setDeleteId, setRefetchTrigger, refetchTrigger } =
    useContext(AdminContext);

  const { loading, deleteCategory } = useDeleteCategory();

  async function handleDelete() {
    if (!deleteId) return;

    await deleteCategory({ id: deleteId });
    setDeleteId("");
    setPopup(false);
    setRefetchTrigger(!refetchTrigger);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setPopup(false)}
      className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="xl:w-1/3 md:w-1/2 sm:w-3/4 w-11/12 mx-auto rounded-lg flex flex-col gap-5 items-center bg-white border border-[#A5A5A5] py-5"
      >
        <p className="text-xl font-semibold">
          Are you sure you want to delete?
        </p>
        <div className="flex justify-center items-center gap-7 w-full">
          <button
            className="px-4 py-2 rounded-lg bg-[#FCFCFC] border border-[#8F8F8F]"
            onClick={() => {
              setPopup(false);
              setDeleteId("");
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded-lg bg-[#b37aac] border border-[#8F8F8F] text-white"
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
        {loading && <Loading />}
      </motion.div>
    </motion.div>
  );
}
