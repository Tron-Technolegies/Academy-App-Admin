import React, { useContext } from "react";
import useGetAllCourses from "../../hooks/course/useGetAllCourses";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { AdminContext } from "../../utils/AdminContext";
import useDeleteCourse from "../../hooks/course/useDeleteCourse";

const CourseList = () => {
  const { deleteCourse } = useDeleteCourse();
  const {
    setShowDeletePopup,
    setDeleteId,
    setDeleteType,
    searchTerm,
    refetchTrigger,
  } = useContext(AdminContext);
  const { loading, course } = useGetAllCourses({ search: searchTerm });

  if (loading) return <Loading />;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="course table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Domain</strong>
            </TableCell>
            <TableCell>
              <strong>Course</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {course.map((item) => (
            <TableRow
              key={item._id}
              sx={{
                "&:hover": {
                  backgroundColor: "#EDE6F5",
                  cursor: "pointer",
                },
              }}
            >
              <TableCell sx={{ border: "none" }}>
                {item.courseCategory?.categoryName || "Unknown Category"}
              </TableCell>
              <TableCell sx={{ border: "none" }}>
                <div className="flex justify-between items-center w-full">
                  <span>{item.courseName}</span>
                  <div className="flex gap-3">
                    <Link to={`/domain/course/${item._id}/edit`}>
                      <CiEdit className="text-blue-600 text-[18px] hover:text-blue-800" />
                    </Link>
                    <button
                      onClick={() => {
                        setShowDeletePopup(true);
                        setDeleteId(item._id);
                        setDeleteType("course");
                      }}
                    >
                      <MdDeleteOutline className="text-red-500 text-[18px] hover:text-red-700" />
                    </button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CourseList;
