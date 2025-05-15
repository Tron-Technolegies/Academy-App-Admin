import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import useGetAllInstructor from "../../hooks/instructor/useGetAllInstructor";
import { Link } from "react-router-dom";
import { AdminContext } from "../../utils/AdminContext";
import Loading from "../Loading";

const TeacherTable = () => {
  const [search, setSearch] = useState("");
  const { instructor, loading, refetch } = useGetAllInstructor({ search });

  const { setShowDeletePopup, setDeleteId, setDeleteType, refetchTrigger } =
    useContext(AdminContext);

  useEffect(() => {
    refetch();
  }, [refetchTrigger]);
  return loading ? (
    <Loading />
  ) : (
    <TableContainer component={Paper}>
      {loading ? (
        <div className="flex justify-center p-8">
          <CircularProgress />
        </div>
      ) : (
        <Table sx={{ minWidth: 650 }} aria-label="teacher table">
          <TableHead>
            <TableRow
              sx={{ fontWeight: "bold", border: "none", color: "#030229" }}
            >
              <TableCell
                sx={{ fontWeight: "bold", border: "none", color: "#030229" }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", border: "none", color: "#030229" }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", border: "none", color: "#030229" }}
              >
                Phone Number
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", border: "none", color: "#030229" }}
              >
                Gender
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", border: "none", color: "#030229" }}
              >
                Designation
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {instructor?.map((x) => (
              <TableRow
                key={x._id}
                sx={{
                  "&:hover": {
                    backgroundColor: "#EDE6F5",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell sx={{ border: "none", color: "#030229" }}>
                  {x.instructorDetails?.[0]?.instructorName}
                </TableCell>
                <TableCell sx={{ border: "none", color: "#030229" }}>
                  {x.email}
                </TableCell>
                <TableCell sx={{ border: "none", color: "#030229" }}>
                  {x.phoneNumber}
                </TableCell>
                <TableCell sx={{ border: "none", color: "#030229" }}>
                  {x.gender}
                </TableCell>
                <TableCell sx={{ border: "none", color: "#030229" }}>
                  {x.instructorDetails?.[0]?.instructorRole}
                </TableCell>
                <TableCell sx={{ border: "none", color: "#030229" }}>
                  <Link
                    to={`/teachers/${x._id}/edit`}
                    className=" mt-auto text-[#48089F] hover:text-[#ba9fd6] font-semibold"
                  >
                    Edit
                  </Link>
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
