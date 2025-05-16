import React from "react";
import useGetAllCourses from "../../hooks/course/useGetAllCourses"; // your hook
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

const CourseList = () => {
  const { loading, course } = useGetAllCourses();
  const { deleteCourse } = useDe;
  if (loading) return <Loading />;

  if (!course || course.length === 0)
    return <div>No courses available at the moment.</div>;

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
              <TableCell
                sx={{
                  border: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {item.courseName}
                <Link
                  to={`/domain/course/${item._id}/edit`}
                  className="mt-auto text-[#5B93FF] hover:text-[#bed1f9]"
                >
                  <CiEdit className="text-blue-600 text-[18px] hover:text-blue-800" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CourseList;
