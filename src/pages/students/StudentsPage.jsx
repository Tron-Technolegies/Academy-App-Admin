import React, { useState, useContext } from "react";
import { AdminContext } from "../../utils/AdminContext";
import StudentsList from "../../components/students/StudentsList";
import StudentHeader from "../../components/students/StudentHeader";

const StudentsPage = () => {
  const [search, setSearch] = useState("");
  const { refetchTrigger } = useContext(AdminContext);
  return (
    <>
      <StudentHeader search={search} setSearch={setSearch} />
      <StudentsList search={search} refetchTrigger={refetchTrigger} />
    </>
  );
};

export default StudentsPage;
