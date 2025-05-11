// import React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import CircularProgress from "@mui/material/CircularProgress";
// import useGetAllInstructor from "../../hooks/instructor/useGetAllInstructor";

// const TeacherTable = () => {
//   const { instructor, loading } = useGetAllInstructor();

//   return (
//     <TableContainer component={Paper}>
//       {loading ? (
//         <div className="flex justify-center p-8">
//           <CircularProgress />
//         </div>
//       ) : (
//         <Table sx={{ minWidth: 650 }} aria-label="teacher table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Phone Number</TableCell>
//               <TableCell>Gender</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {instructor?.map((x) => (
//               <TableRow key={x._id}>
//                 <TableCell>{x.instructorName}</TableCell>
//                 <TableCell>{x.email}</TableCell>
//                 <TableCell>{x.phoneNumber}</TableCell>
//                 <TableCell>{x.gender}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       )}
//     </TableContainer>
//   );
// };

// export default TeacherTable;
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TeacherTable = () => {
  const loading = false;

  const instructor = [
    {
      _id: "1",
      instructorName: "John Doe",
      email: "john@example.com",
      phoneNumber: "1234567890",
      gender: "Male",
    },
    {
      _id: "2",
      instructorName: "Jane Smith",
      email: "jane@example.com",
      phoneNumber: "0987654321",
      gender: "Female",
    },
  ];

  const handleEdit = (id) => {
    console.log("Edit", id);
  };

  const handleDelete = (id) => {
    console.log("Delete", id);
  };

  return (
    <TableContainer component={Paper}>
      {loading ? (
        <div className="flex justify-center p-8">
          <CircularProgress />
        </div>
      ) : (
        <Table
          sx={{ minWidth: 650, border: "none", borderCollapse: "collapse" }}
          aria-label="teacher table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ border: "none", color: "#030229" }}>
                Name
              </TableCell>
              <TableCell sx={{ border: "none", color: "#030229" }}>
                Email
              </TableCell>
              <TableCell sx={{ border: "none", color: "#030229" }}>
                Phone Number
              </TableCell>
              <TableCell sx={{ border: "none", color: "#030229" }}>
                Gender
              </TableCell>
              <TableCell sx={{ border: "none", color: "#030229" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {instructor.map((x) => (
              <TableRow
                key={x._id}
                sx={{
                  "&:hover": {
                    backgroundColor: "#EDE6F5",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell
                  sx={{ border: "none", fontSize: "12px", color: "#030229" }}
                >
                  {x.instructorName}
                </TableCell>
                <TableCell
                  sx={{ border: "none", fontSize: "12px", color: "#030229" }}
                >
                  {x.email}
                </TableCell>
                <TableCell
                  sx={{ border: "none", fontSize: "12px", color: "#030229" }}
                >
                  {x.phoneNumber}
                </TableCell>
                <TableCell
                  sx={{ border: "none", fontSize: "12px", color: "#030229" }}
                >
                  {x.gender}
                </TableCell>
                <TableCell sx={{ border: "none" }}>
                  <IconButton
                    onClick={() => handleEdit(x._id)}
                    color="primary"
                    size="small"
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(x._id)}
                    color="error"
                    size="small"
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default TeacherTable;
