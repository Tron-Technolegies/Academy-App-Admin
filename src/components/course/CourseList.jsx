import useGetAllCourses from "../../hooks/course/useGetAllCourses"; // Adjust the path if needed
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import Loading from "../Loading";
import { Link } from "react-router-dom";

const CourseList = () => {
  const { loading, course } = useGetAllCourses(); // Fetch courses

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      {course.length === 0 ? (
        <div>No courses available at the moment.</div>
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="course table">
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
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      border: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {item.courseName} {/* Displaying course name */}
                    <Link
                      to={`/domain/course/${item._id}/edit`}
                      className=" mt-auto text-[#5B93FF] hover:text-[#bed1f9] "
                    >
                      Edit
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default CourseList;
