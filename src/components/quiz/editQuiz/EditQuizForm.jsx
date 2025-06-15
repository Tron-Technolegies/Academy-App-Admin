import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetAllCourses from "../../../hooks/course/useGetAllCourses";
import useGetAllModule from "../../../hooks/module/useGetAllModule";
import useGetAllCategory from "../../../hooks/courseCategories/useGetAllCategory";
import useUpdateQuiz from "../../../hooks/quiz/useUpdateQuiz";
import useGetSingleQuiz from "../../../hooks/quiz/useGetSingleQuiz"; // Assumed

const EditQuizForm = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [course, setCourse] = useState("");
  const [module, setModule] = useState("");
  const { id } = useParams();

  const { updateQuiz, loading: updatingQuiz } = useUpdateQuiz();
  const { course: courses = [] } = useGetAllCourses();
  const { module: modules = [] } = useGetAllModule();
  const { category: categories = [] } = useGetAllCategory();
  const { quiz } = useGetSingleQuiz(id); // Assumed hook

  useEffect(() => {
    if (quiz) {
      setName(quiz.name);
      setTime(quiz.time);
      setCategory(quiz.courseCategory?._id);
      setCourse(quiz.relatedCourse?._id);
      setModule(quiz.relatedModule?._id);
    }
  }, [quiz]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateQuiz({
      name,
      time,
      courseCategory: category,
      relatedCourse: course,
      relatedModule: module,
      id,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormSelect
        title="quiz name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        list={name}
        multi={false}
        displayField="categoryName"
      />
      <FormSelect
        title="Time"
        value={Time}
        onChange={(e) => setName(e.target.value)}
        list={name}
        multi={false}
        displayField="categoryName"
      />
      <FormSelect
        title="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        list={categories}
        multi={false}
        displayField="categoryName"
      />
      <FormSelect
        title="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        list={courses}
        multi={false}
        displayField="courseName"
      />
      <FormSelect
        title="Module"
        value={module}
        onChange={(e) => setModule(e.target.value)}
        list={modules.filter((m) => m.relatedCourse?._id === course)} // Filter modules by selected course
        multi={false}
        displayField="moduleName"
      />
    </form>
  );
};

export default EditQuizForm;
//quiz
