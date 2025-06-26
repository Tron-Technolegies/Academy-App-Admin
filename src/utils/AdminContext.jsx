import React, { createContext, useState } from "react";

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showSmallBar, setShowSmallBar] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [deleteType, setDeleteType] = useState("");
  const [refetchTrigger, setRefetchTrigger] = useState(false);
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <AdminContext.Provider
      value={{
        setShowDeletePopup,
        showDeletePopup,
        showSmallBar,
        setShowSmallBar,
        deleteId,
        setDeleteId,
        deleteType,
        setDeleteType,
        refetchTrigger,
        setRefetchTrigger,
        user,
        setUser,
        searchTerm, // expose searchTerm
        setSearchTerm,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
