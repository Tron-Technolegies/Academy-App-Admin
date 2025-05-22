import React, { useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Loading from "../Loading";
import { Box } from "@mui/material";
import useGetAllUser from "../../hooks/auth/useGetAllUser";
import { AdminContext } from "../../utils/AdminContext";

const StudentsList = ({ search, refetchTrigger }) => {
  const { loading, user, refetch } = useGetAllUser({ search });

  useEffect(() => {
    refetch();
  }, [refetchTrigger, search]);

  if (loading) return <Loading />;

  return (
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
              <TableCell sx={{ border: "none" }}>
                <Box
                  sx={{
                    backgroundColor:
                      x.gender === "male"
                        ? "#D6E4FF"
                        : x.gender === "female"
                        ? "#FFE0D6"
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
                    mx: "auto",
                  }}
                >
                  {x.gender}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentsList;
