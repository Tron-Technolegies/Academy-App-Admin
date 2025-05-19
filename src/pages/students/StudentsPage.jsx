import React from "react";
import StudentList from "../../components/students/StudentsList";
import StudentHeader from "../../components/students/StudentHeader";

const StudentsPage = () => {
  return (
    <div>
      <StudentHeader />
      <StudentList />
    </div>
  );
};

export default StudentsPage;
