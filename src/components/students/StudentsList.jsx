import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { AdminContext } from "../../utils/AdminContext";
import Loading from "../Loading";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import useGetAllUser from "../../hooks/auth/useGetAllUser";

const StudentsList = () => {
  const [search, setSearch] = useState("");
  const { loading, user, refetch } = useGetAllUser();
  const { setShowDeletePopup, setDeleteId, setDeleteType, refetchTrigger } =
    useContext(AdminContext);

  useEffect(() => {
    refetch();
  }, [refetchTrigger]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="student table">
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
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((x) => (
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
                  {x.firstName} {x.lastName}
                </TableCell>
                <TableCell sx={{ color: "#030229", border: "none" }}>
                  {x.email}
                </TableCell>
                <TableCell sx={{ color: "#030229", border: "none" }}>
                  {x.phoneNumber}
                </TableCell>
                <TableCell sx={{ color: "#030229", border: "none" }}>
                  {x.gender}
                </TableCell>

                <TableCell
                  sx={{
                    color: "#030229",
                    display: "flex",
                    gap: "10px",
                    border: "none",
                  }}
                >
                  <Link to={`/students/${x._id}/edit`}>
                    <CiEdit className="text-blue-600 text-[18px] hover:text-blue-800" />
                  </Link>
                  <button
                    onClick={() => {
                      setShowDeletePopup(true);
                      setDeleteId(x._id);
                      setDeleteType("user");
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
    </>
  );
};

export default StudentsList;
