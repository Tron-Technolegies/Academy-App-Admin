import React, { useState } from "react";
import TeacherTable from "../../components/teachers/TeacherTable";
import TeacherHeader from "../../components/teachers/TeacherHeader";

const TeachersPage = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <TeacherHeader search={search} setSearch={setSearch} />
      <TeacherTable search={search} />
    </div>
  );
};

export default TeachersPage;
