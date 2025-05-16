import React, { useContext } from "react";
import { AdminContext } from "../utils/AdminContext";
import useDeleteCategory from "../hooks/courseCategories/useDeleteCategory";
import Loading from "./Loading";
import { motion } from "framer-motion";

const DeletePopup = () => {
  const {
    deleteId,
    setDeleteId,
    deleteType,
    setDeleteType,
    setRefetchTrigger,
    refetchTrigger,
    showDeletePopup,
    setShowDeletePopup,
  } = useContext(AdminContext);

  const { loading, deleteCategory } = useDeleteCategory();

  async function handleDelete() {
    if (deleteType === "category") {
      await deleteCategory({ id: deleteId });
      setDeleteId("");
      setShowDeletePopup(false); // Close popup on delete
      setRefetchTrigger(!refetchTrigger);
      setDeleteType("");
    }
  }

  if (!showDeletePopup) return null; // Don't render if popup is hidden

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowDeletePopup(false)}
      className="fixed inset-0 bg-white bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md p-6 rounded-2xl bg-white  border-none   flex flex-col items-center gap-6"
      >
        <p className="text-lg font-semibold text-gray-800 text-center">
          Are you sure you want to delete?
        </p>
        <div className="flex gap-4 w-full justify-center">
          <button
            className="px-5 py-2 text-sm font-medium rounded-sm border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 transition"
            onClick={() => {
              setShowDeletePopup(false);
              setDeleteId("");
              setDeleteType("");
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-5 py-2 text-sm font-medium rounded-sm bg-red-600 hover:bg-red-700 text-white transition"
          >
            Delete
          </button>
        </div>
        {loading && <Loading />}
      </motion.div>
    </motion.div>
  );
};

export default DeletePopup;
