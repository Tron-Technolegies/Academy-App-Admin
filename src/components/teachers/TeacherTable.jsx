import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useGetAllInstructor from "../../hooks/instructor/useGetAllInstructor";

const TeacherTable = () => {
  const { instructor, refetch } = useGetAllInstructor();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="teacher table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            {/* <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Gender</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {instructor && instructor.length > 0 ? (
            instructor.map((x) => (
              <TableRow key={x._id}>
                <TableCell>{x.instructorName}</TableCell>
                {/* <TableCell>{email}</TableCell>
                <TableCell>{phoneNumber}</TableCell>
                <TableCell>{gender}</TableCell> */}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4}>No instructors found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeacherTable;
