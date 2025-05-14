import React from "react";
import CourseHeader from "../../components/course/CourseHeader";
import DomainNavLink from "../../components/domain/DomainNavLink";
import CourseList from "../../components/course/CourseList";
import EditCoursePage from "./EditCoursePage";

const CoursePage = () => {
  return (
    <div>
      <CourseHeader />
      <DomainNavLink />
      <CourseList />
    </div>
  );
};

export default CoursePage;
