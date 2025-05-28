import React, { useContext, useEffect, useMemo } from "react";
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
import { debounce } from "lodash";
import { MdDeleteOutline } from "react-icons/md";
import { AdminContext } from "../../utils/AdminContext";

const CourseList = ({ search, refetchTrigger }) => {
  // Pass `search` directly to the hook to fetch filtered data
  const { loading, course, refetch } = useGetAllCourses({ search });
  const { deleteCourse } = useDeleteCourse();
  const {
    showDeletePopup,
    setShowDeletePopup,
    deleteId,
    setDeleteId,
    setDeleteType,
  } = useContext(AdminContext);

  // Debounce the refetch function (only recreated when 'refetch' changes)
  const debouncedRefetch = useMemo(
    () =>
      debounce(() => {
        console.log("Debounced refetch called with search:", search);
        refetch();
      }, 500),
    [refetch, search] // add search here to log current search value
  );

  useEffect(() => {
    debouncedRefetch();

    // Cleanup on unmount or dependency change
    return () => {
      debouncedRefetch.cancel();
    };
  }, [search, refetchTrigger, debouncedRefetch]);
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
