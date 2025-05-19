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
import useDeleteInstructor from "../../hooks/instructor/useDeleteInstructor";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Box } from "@mui/material";

const TeacherTable = () => {
  const [search, setSearch] = useState("");
  const { instructor, loading, refetch } = useGetAllInstructor({ search });
  const { deleteInstructor } = useDeleteInstructor();
  const { setShowDeletePopup, setDeleteId, setDeleteType, refetchTrigger } =
    useContext(AdminContext);

  useEffect(() => {
    refetch();
  }, [refetchTrigger]);

  return loading ? (
    <Loading />
  ) : (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="teacher table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", color: "#030229" }}>
              Name
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "#030229" }}>
              Email
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "#030229" }}>
              Phone Number
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "#030229" }}>
              Gender
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "#030229" }}>
              Designation
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", color: "#030229" }}>
              Actions
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
              <TableCell sx={{ color: "#030229", border: "none" }}>
                {x.instructorDetails?.[0]?.instructorName}
              </TableCell>
              <TableCell sx={{ color: "#030229", border: "none" }}>
                {x.email}
              </TableCell>
              <TableCell sx={{ color: "#030229", border: "none" }}>
                {x.phoneNumber}
              </TableCell>

              <TableCell sx={{ border: "none" }}>
                <Box
                  sx={{
                    backgroundColor:
                      x.gender === "male"
                        ? "#D6E4FF"
                        : x.gender === "female"
                        ? "#FFEAE4"
                        : "#F0F0F0",
                    color:
                      x.gender === "male"
                        ? "#5B93FF"
                        : x.gender === "female"
                        ? "#FF8F6B"
                        : "#333",
                    fontWeight: 500,
                    borderRadius: "20px",
                    width: "70px",
                    height: "30px",
                    padding: "10px 6px",
                    textTransform: "capitalize",
                    textAlign: "center",
                    display: "inline-block",

                    mx: "auto", // horizontally center within TableCell
                  }}
                >
                  {x.gender}
                </Box>
              </TableCell>
              <TableCell sx={{ color: "#030229", border: "none" }}>
                {x.instructorDetails?.[0]?.instructorRole}
              </TableCell>
              <TableCell
                sx={{
                  color: "#030229",
                  display: "flex",
                  gap: "10px",
                  border: "none",
                }}
              >
                <Link to={`/teachers/${x._id}/edit`}>
                  <CiEdit className="text-blue-600 text-[18px] hover:text-blue-800" />
                </Link>
                <button
                  onClick={() => {
                    setShowDeletePopup(true);
                    setDeleteId(x._id);
                    setDeleteType("instructor");
                  }}
                >
                  <MdDeleteOutline className="text-red-500 text-[18px] hover:text-red-700" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeacherTable;
