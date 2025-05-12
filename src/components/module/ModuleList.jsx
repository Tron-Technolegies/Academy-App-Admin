import React from "react";
import useGetAllModule from "../../hooks/module/useGetAllModule"; // Adjust the path if needed
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import Loading from "../Loading";

const ModuleList = () => {
  const { loading, module } = useGetAllModule(); // Fetching modules

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      {module.length === 0 ? (
        <div>No modules available at the moment.</div>
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="module table">
            <TableBody>
              {module.map((item) => (
                <TableRow key={item._id}>
                  <TableCell component="th" scope="row">
                    {item.moduleName} {/* Displaying module name */}
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

export default ModuleList;
