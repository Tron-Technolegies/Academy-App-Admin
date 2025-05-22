import React, { useState, useContext } from "react";
import { AdminContext } from "../../utils/AdminContext";
import TeacherHeader from "../../components/teachers/TeacherHeader";
import TeacherTable from "../../components/teachers/TeacherTable";

const TeachersPage = () => {
  const [search, setSearch] = useState("");
  const { refetchTrigger } = useContext(AdminContext);

  return (
    <>
      <TeacherHeader search={search} setSearch={setSearch} />
      <TeacherTable search={search} refetchTrigger={refetchTrigger} />
    </>
  );
};

export default TeachersPage;
