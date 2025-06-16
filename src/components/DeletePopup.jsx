import React, { useContext } from "react";
import { AdminContext } from "../utils/AdminContext";
import useDeleteCategory from "../hooks/courseCategories/useDeleteCategory";
import Loading from "./Loading";
import { motion } from "framer-motion";
import useDeleteCourse from "../hooks/course/useDeleteCourse";
import useDeletePlan from "../hooks/plan/useDeletePlan";
import useDeleteInstructor from "../hooks/instructor/useDeleteInstructor";
import useDeleteModule from "../hooks/module/useDeleteModule";
import useDeleteCommunity from "../hooks/community/useDeleteCommunity";
import useDeleteSubCommunity from "../hooks/subCommunity/useDeleteSubCommunity";
import useDeleteChatRoom from "../hooks/chatRoom/useDeleteChatRoom";
import useDeleteVideo from "../hooks/video/useDeleteVideo";
import useDeleteQuiz from "../hooks/quiz/useDeleteQuiz";

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

  const { loading: categoryLoading, deleteCategory } = useDeleteCategory();
  const { loading: courseLoading, deleteCourse } = useDeleteCourse();
  const { loading: planLoading, deletePlan } = useDeletePlan();
  const { loading: instructorLoading, deleteInstructor } =
    useDeleteInstructor();
  const { loading: moduleLoading, deleteModule } = useDeleteModule();
  const { loading: communityLoading, deleteCommunity } = useDeleteCommunity();
  const { loading: subCommunityLoading, deleteSubCommunity } =
    useDeleteSubCommunity();
  const { loading: chatRoomLoading, deleteChatRoom } = useDeleteChatRoom();
  const { loading: videoLoading, deleteVideo } = useDeleteVideo();
  const { loading: quizLoading, deleteQuiz } = useDeleteQuiz();

  const loading =
    categoryLoading ||
    courseLoading ||
    planLoading ||
    instructorLoading ||
    moduleLoading ||
    subCommunityLoading ||
    chatRoomLoading ||
    communityLoading ||
    videoLoading ||
    quizLoading;

  async function handleDelete() {
    if (deleteType === "category") await deleteCategory({ id: deleteId });
    else if (deleteType === "course") await deleteCourse({ id: deleteId });
    else if (deleteType === "plan") await deletePlan({ id: deleteId });
    else if (deleteType === "instructor")
      await deleteInstructor({ id: deleteId });
    else if (deleteType === "module") await deleteModule({ id: deleteId });
    else if (deleteType === "community")
      await deleteCommunity({ id: deleteId });
    else if (deleteType === "subCommunity")
      await deleteSubCommunity({ id: deleteId });
    else if (deleteType === "chatRoom") await deleteChatRoom({ id: deleteId });
    else if (deleteType === "video") await deleteVideo({ id: deleteId });
    else if (deleteType === "quiz") await deleteQuiz({ id: deleteId });

    setDeleteId("");
    setShowDeletePopup(false);
    setRefetchTrigger(!refetchTrigger);
    setDeleteType("");
  }

  if (!showDeletePopup) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowDeletePopup(false)}
      className="fixed inset-0 bg-white bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-popup-title"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md p-6 rounded-2xl bg-white border-none flex flex-col items-center gap-6"
      >
        <p
          id="delete-popup-title"
          className="text-lg font-semibold text-gray-800 text-center"
        >
          Are you sure you want to delete?
        </p>
        <div className="flex gap-4 w-full justify-center">
          <button
            disabled={loading}
            className={`px-5 py-2 text-sm font-medium rounded-sm border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => {
              setShowDeletePopup(false);
              setDeleteId("");
              setDeleteType("");
            }}
          >
            Cancel
          </button>
          <button
            disabled={loading}
            onClick={handleDelete}
            className={`px-5 py-2 text-sm font-medium rounded-sm bg-red-600 hover:bg-red-700 text-white transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
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
