import React, { useState, useContext } from "react";
import { AdminContext } from "../../utils/AdminContext";
import CourseHeader from "../../components/course/CourseHeader";
import DomainNavLink from "../../components/domain/DomainNavLink";
import CourseList from "../../components/course/CourseList";

const CoursePage = () => {
  const [search, setSearch] = useState("");
  const { refetchTrigger } = useContext(AdminContext);
  return (
    <div>
      <CourseHeader search={search} setSearch={setSearch} />
      <DomainNavLink />
      <CourseList search={search} refetchTrigger={refetchTrigger} />
    </div>
  );
};

export default CoursePage;
