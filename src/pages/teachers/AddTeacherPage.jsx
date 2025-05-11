import React from "react";

import AddTeacherHeader from "../../components/teachers/addTeacher/AddTeacherHeader";
import AddTeacherForm from "../../components/teachers/addTeacher/AddTeacherForm";
import EditTeacherForm from "../../components/teachers/editTeacher/EditTeacherForm";

const AddTeacherPage = () => {
  return (
    <div>
      <AddTeacherHeader />
      <AddTeacherForm />
    </div>
  );
};

export default AddTeacherPage;
