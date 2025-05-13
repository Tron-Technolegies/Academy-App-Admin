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
import { Link } from "react-router-dom";

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
                <TableRow
                  key={item._id}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#EDE6F5",
                      cursor: "pointer",
                    },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      border: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {item.moduleName} {/* Displaying module name */}
                    <Link
                      to={`/domain/${item._id}/edit`}
                      className=" mt-auto text-[#5B93FF] hover:text-[#bed1f9] "
                    >
                      Edit
                    </Link>
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
