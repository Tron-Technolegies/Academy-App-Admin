import React from "react";
import useGetAllCourses from "../../../hooks/course/useGetAllCourses";
import useGetAllModule from "../../../hooks/module/useGetAllModule";
import useGetAllCategory from "../../../hooks/courseCategories/useGetAllCategory";
import useUpdateQuiz from "../../../hooks/quiz/useUpdateQuiz";

const EditQuizForm = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [course, setCourse] = useState("");
  const [module, setModule] = useState("");

  const { quiz } = useUpdateQuiz();
  const { course: courses = [] } = useGetAllCourses();
  const { module: modules = [] } = useGetAllModule();
  const { category: categories = [] } = useGetAllCategory();

  return <div></div>;
};

export default EditQuizForm;
