import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  IconButton,
  Collapse,
  Box,
} from "@mui/material";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import { AdminContext } from "../../utils/AdminContext";
import {
  MdDeleteOutline,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import useGetAllQuiz from "../../hooks/quiz/useGetAllQuiz";
import useDeleteQuiz from "../../hooks/quiz/useDeleteQuiz";

const QuizList = () => {
  const { deleteQuiz } = useDeleteQuiz();
  const {
    searchTerm,
    showDeletePopup,
    setShowDeletePopup,
    deleteId,
    setDeleteId,
    setDeleteType,
    refetchTrigger,
  } = useContext(AdminContext);

  const { loading, quiz, refetch } = useGetAllQuiz({ search: searchTerm });
  const [openQuiz, setOpenQuiz] = useState({});

  useEffect(() => {
    refetch();
  }, [refetchTrigger, searchTerm]);

  const toggleOpen = (id) => {
    setOpenQuiz((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading) return <Loading />;

  return (
    <div className="p-4">
      <TableContainer component={Paper}>
        <Table aria-label="quiz table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>
                <strong>Quiz Name</strong>
              </TableCell>
              <TableCell>
                <strong>Course</strong>
              </TableCell>
              <TableCell>
                <strong>Module</strong>
              </TableCell>
              <TableCell>
                <strong>Category</strong>
              </TableCell>
              <TableCell>
                <strong>Time (mins)</strong>
              </TableCell>
              <TableCell>
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quiz.map((item) => (
              <React.Fragment key={item._id}>
                <TableRow
                  sx={{
                    "& td, & th": { borderBottom: "none" },
                    "&:hover": {
                      backgroundColor: "#F9F5FF",
                      cursor: "pointer",
                    },
                  }}
                >
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => toggleOpen(item._id)}
                    >
                      {openQuiz[item._id] ? (
                        <MdKeyboardArrowUp />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    {item.relatedCourse?.courseName || "Unknown"}
                  </TableCell>
                  <TableCell>
                    {item.relatedModule?.moduleName || "Unknown"}
                  </TableCell>
                  <TableCell>
                    {item.courseCategory?.categoryName || "Unknown"}
                  </TableCell>
                  <TableCell>{item.time || "N/A"}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Link to={`/quiz/${item._id}/edit`}>
                        <CiEdit className="text-blue-600 text-[18px] hover:text-blue-800" />
                      </Link>
                      <button
                        onClick={() => {
                          setShowDeletePopup(true);
                          setDeleteId(item._id);
                          setDeleteType("quiz");
                        }}
                      >
                        <MdDeleteOutline className="text-red-500 text-[18px] hover:text-red-700" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={7}
                  >
                    <Collapse
                      in={openQuiz[item._id]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Box margin={2}>
                        <strong>Questions:</strong>
                        {item.questions.length === 0 ? (
                          <p>No questions available.</p>
                        ) : (
                          <Table size="small" aria-label="questions">
                            <TableHead>
                              <TableRow>
                                <TableCell>
                                  <strong>#</strong>
                                </TableCell>
                                <TableCell>
                                  <strong>Question</strong>
                                </TableCell>
                                <TableCell>
                                  <strong>Options</strong>
                                </TableCell>
                                <TableCell>
                                  <strong>Answer</strong>
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {item.questions.map((q, idx) => (
                                <TableRow key={idx}>
                                  <TableCell>
                                    <strong>{idx + 1}</strong>
                                  </TableCell>
                                  <TableCell>{q.question}</TableCell>
                                  <TableCell>
                                    <ul
                                      style={{
                                        paddingLeft: 20,
                                        margin: 0,
                                        listStyle: "none",
                                      }}
                                    >
                                      {["1", "2", "3", "4"].map((label, i) => (
                                        <li
                                          key={label}
                                          style={{ marginBottom: 8 }}
                                        >
                                          <strong>{label}.</strong>{" "}
                                          {q[`option${i + 1}`]}
                                        </li>
                                      ))}
                                    </ul>
                                  </TableCell>
                                  <TableCell>
                                    <strong>{q.answer}</strong>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        )}
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default QuizList;
