import React, { useState } from "react";
import TeacherTable from "../../components/teachers/TeacherTable";
import TeacherHeader from "../../components/teachers/TeacherHeader";

const TeachersPage = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <TeacherHeader />
      <TeacherTable />
    </div>
  );
};

export default TeachersPage;
