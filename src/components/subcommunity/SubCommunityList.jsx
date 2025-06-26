import React, { useContext, useEffect } from "react";
import useGetAllCourses from "../../hooks/course/useGetAllCourses";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";

import { AdminContext } from "../../utils/AdminContext";
import { MdDeleteOutline } from "react-icons/md";
import useGetAllSubCommunity from "../../hooks/subCommunity/useGetAllSubCommunity";
import useDeleteSubCommunity from "../../hooks/subCommunity/useDeleteSubCommunity";

const SubCommunityList = () => {
  const { deleteSubCommunity } = useDeleteSubCommunity();
  const {
    searchTerm,
    refetchTrigger,
    showDeletePopup,
    setShowDeletePopup,
    deleteId,
    setDeleteId,
    setDeleteType,
  } = useContext(AdminContext);
  const { loading, subCommunity, refetch } = useGetAllSubCommunity({
    search: searchTerm,
  });

  useEffect(() => {
    refetch && refetch();
  }, [refetchTrigger]);

  if (loading) return <Loading />;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="course table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Community</strong>
            </TableCell>
            <TableCell>
              <strong> Sub Community</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subCommunity.map((item) => (
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
                {item.relatedCommunity?.communityName || "Unknown Community"}
              </TableCell>
              <TableCell sx={{ border: "none" }}>
                <div className="flex justify-between items-center w-full">
                  <span>{item.subCommunityName}</span>
                  <div className="flex gap-3">
                    <Link
                      to={`/community/subCommunity/${item._id}/edit`}
                      className="text-[#5B93FF] hover:text-[#bed1f9]"
                    >
                      <CiEdit className="text-blue-600 text-[18px] hover:text-blue-800" />
                    </Link>
                    <button
                      onClick={() => {
                        setShowDeletePopup(true);
                        setDeleteId(item._id);
                        setDeleteType("subCommunity");
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

export default SubCommunityList;
