import React, { useState } from "react";
import FormInput from "../../FromInput";
import FormSelect from "../../FormSelect";
import useAddQuiz from "../../../hooks/quiz/useAddQuiz";
import useGetAllCourses from "../../../hooks/course/useGetAllCourses";
import useGetAllModule from "../../../hooks/module/useGetAllModule";
import useGetAllCategory from "../../../hooks/courseCategories/useGetAllCategory";
import QuestionItem from "../../QuestionItem";

const AddQuizForm = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [course, setCourse] = useState("");
  const [module, setModule] = useState("");

  const [questions, setQuestions] = useState([
    {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "",
    },
  ]);

  const { addQuiz, loading } = useAddQuiz();
  const { course: courses = [] } = useGetAllCourses();
  const { module: modules = [] } = useGetAllModule();
  const { category: categories = [] } = useGetAllCategory();

  const filteredCourses = courses.filter(
    (c) => c.courseCategory?._id === category
  );
  const filteredModules = modules.filter(
    (mod) => mod.relatedCourse && mod.relatedCourse._id === course
  );

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: "",
      },
    ]);
  };

  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addQuiz({
      name,
      time,
      courseCategory: category,
      relatedCourse: course,
      relatedModule: module,
      questions,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="pt-4 space-y-6">
      <h4 className="text-[#4F4F4F] text-3xl p-6 font-semibold">Add Quiz</h4>

      <div className="max-w-150 py-6 px-6 space-y-4">
        <FormInput
          label="Quiz Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          label="Time (minutes)"
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <FormSelect
          title="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          list={categories}
          displayField="categoryName"
        />

        <FormSelect
          title="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          list={filteredCourses}
          displayField="courseName"
        />

        <FormSelect
          title="Module"
          value={module}
          onChange={(e) => setModule(e.target.value)}
          list={filteredModules}
          displayField="moduleName"
        />

        {/* Questions section */}
        <div>
          <h5 className="text-xl font-semibold mb-2">Questions</h5>
          {questions.map((q, index) => (
            <QuestionItem
              key={index}
              index={index}
              questionData={q}
              onChange={handleQuestionChange}
              onRemove={removeQuestion}
              canRemove={questions.length > 1}
            />
          ))}

          <button
            type="button"
            onClick={addQuestion}
            className="bg-[#8499be] w-32 text-white rounded-sm px-3 py-2.5 text-sm font-semibold hover:bg-[#96b4e8] hover:scale-105 transition-transform duration-300"
          >
            Add Question
          </button>
        </div>
      </div>

      <div className="max-w-190 px-6 flex justify-end">
        <button
          className="bg-[#48089F] w-32 text-white rounded-sm px-3 py-2.5 text-sm font-semibold hover:bg-[#ba9fd6] hover:scale-105 transition-transform duration-300"
          type="submit"
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </div>
    </form>
  );
};

export default AddQuizForm;
