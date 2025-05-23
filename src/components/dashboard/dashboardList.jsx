import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import Loading from "../Loading";
import useGetUserStats from "../../hooks/admin/useGetUserStats";

const NewUsersTable = () => {
  const { stats, loading } = useGetUserStats();
  const newUsers = stats?.newUsers || [];

  if (loading) return <Loading />;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="new users table">
        <TableHead>
          <TableRow>
            {["Username", "Phone Number", "Date Joined"].map((header) => (
              <TableCell
                key={header}
                sx={{
                  fontWeight: "bold",
                  color: "grey",
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {newUsers.map((user, index) => (
            <TableRow
              key={user._id}
              sx={{
                backgroundColor: index % 2 === 0 ? "#EDEEFC" : "#E6F1FD",
                "&:hover": {
                  backgroundColor: "#d1d9ff",
                  cursor: "pointer",
                },
              }}
            >
              {[
                user.firstName || user.lastName || "—",
                user.phoneNumber || "—",
                new Date(user.createdAt).toLocaleDateString(),
              ].map((value, i) => (
                <TableCell
                  key={i}
                  sx={{
                    border: "5px solid white",
                  }}
                >
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NewUsersTable;
