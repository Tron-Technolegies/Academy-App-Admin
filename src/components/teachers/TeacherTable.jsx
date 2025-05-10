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
import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Mock data
const instructor = [
  {
    _id: "1",
    instructorName: "Students 1",
    email: "Students1@gmail.com",
    phoneNumber: "+91 1234567890",
    gender: "Male",
  },
  {
    _id: "2",
    instructorName: "Students 2",
    email: "Students1@gmail.com",
    phoneNumber: "+91 1234567890",
    gender: "Female",
  },
  {
    _id: "3",
    instructorName: "Students 2",
    email: "Students1@gmail.com",
    phoneNumber: "+91 1234567890",
    gender: "Male",
  },
  {
    _id: "4",
    instructorName: "Students 2",
    email: "Students1@gmail.com",
    phoneNumber: "+91 1234567890",
    gender: "Female",
  },
  {
    _id: "5",
    instructorName: "Students 2",
    email: "Students1@gmail.com",
    phoneNumber: "+91 1234567890",
    gender: "Male",
  },
  {
    _id: "6",
    instructorName: "Students 2",
    email: "Students1@gmail.com",
    phoneNumber: "+91 1234567890",
    gender: "Male",
  },
];

const TeacherTable = () => {
  const loading = false; // No loading state needed for static data

  return (
    <TableContainer component={Paper}>
      {loading ? (
        <div className="flex justify-center p-8">
          <CircularProgress />
        </div>
      ) : (
        <Table sx={{ minWidth: 650 }} aria-label="teacher table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {instructor.map((x) => (
              <TableRow key={x._id}>
                <TableCell>{x.instructorName}</TableCell>
                <TableCell>{x.email}</TableCell>
                <TableCell>{x.phoneNumber}</TableCell>
                <TableCell>{x.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default TeacherTable;
