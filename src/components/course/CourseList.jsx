import React, { useContext, useEffect } from "react";
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
import useDeleteCourse from "../../hooks/course/useDeleteCourse";
import { AdminContext } from "../../utils/AdminContext";
import { MdDeleteOutline } from "react-icons/md";

const CourseList = () => {
  const { loading, course, refetch } = useGetAllCourses();
  const { deleteCourse } = useDeleteCourse();
  const {
    showDeletePopup,
    setShowDeletePopup,
    deleteId,
    setDeleteId,
    setDeleteType,
    refetchTrigger,
  } = useContext(AdminContext);

  useEffect(() => {
    refetch();
  }, [refetchTrigger]);
  return loading ? (
    <Loading />
  ) : (
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
                    <Link
                      to={`/domain/course/${item._id}/edit`}
                      className="text-[#5B93FF] hover:text-[#bed1f9]"
                    >
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
