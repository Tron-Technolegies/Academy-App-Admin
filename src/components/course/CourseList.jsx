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
                <TableRow key={item._id}>
                  <TableCell component="th" scope="row">
                    {item.courseName} {/* Displaying course name */}
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
