import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LogoutPopup({ isOpen, onConfirm, onCancel }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-[#8520cdfb] text-white p-6 rounded-sm shadow-xl w-[90%] max-w-sm "
          >
            <h2 className="text-xl font-semibold mb-2">Confirm Logout</h2>
            <p className="text-sm text-white mb-6">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-between gap-3">
              <button
                onClick={onConfirm}
                className="flex-1 border border-white text-white hover:bg-white hover:text-[#48089F] py-2 rounded-sm transition"
              >
                Logout
              </button>
              <button
                onClick={onCancel}
                className="flex-1 border border-white-400 text-white hover:bg-white hover:text-[#48089F] py-2 rounded-sm transition"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
