import React from "react";
import useGetAllModule from "../../hooks/module/useGetAllModule";
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
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const ModuleList = () => {
  const { loading, module } = useGetAllModule();

  if (loading) return <Loading />;

  if (!module || module.length === 0)
    return <div>No modules available at the moment.</div>;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="module table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Category</strong>
            </TableCell>
            <TableCell>
              <strong>Course</strong>
            </TableCell>
            <TableCell>
              <strong>Module</strong>
            </TableCell>
          </TableRow>
        </TableHead>
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
              <TableCell sx={{ border: "none" }}>
                {item.relatedCourse?.courseCategory?.categoryName ||
                  "Unknown Category"}
              </TableCell>
              <TableCell sx={{ border: "none" }}>
                {item.relatedCourse?.courseName || "Unknown Course"}
              </TableCell>
              <TableCell sx={{ border: "none" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{item.moduleName}</span>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Link
                      to={`/domain/module/${item._id}/edit`}
                      className="mt-auto text-[#5B93FF] hover:text-[#bed1f9]"
                    >
                      <CiEdit className="text-blue-600 text-[18px] hover:text-blue-800" />
                    </Link>
                    <button
                      onClick={() => {
                        setShowDeletePopup(true);
                        setDeleteId(item._id);
                        setDeleteType("course");
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                      }}
                    >
                      <MdDeleteOutline className="text-red-500 text-[18px] hover:text-red-700" />
                    </button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ModuleList;
