import React, { useContext, useEffect } from "react";
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
import useGetAllCommunity from "../../hooks/community/useGetAllCommunities";
import { AdminContext } from "../../utils/AdminContext";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const CommunityList = () => {
  const { loading, community, refetch } = useGetAllCommunity();
  const {
    showDeletePopup,
    setShowDeletePopup,
    deleteId,
    setDeleteId,
    setDeleteType,
    refetchTrigger,
  } = useContext(AdminContext);

  useEffect(() => {
    refetch();
  }, [refetchTrigger]);
  return loading ? (
    <Loading />
  ) : (
    <div className="">
      {community.length === 0 ? (
        <div>No communities available at the moment.</div>
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="community table">
            <TableBody sx={{ border: "none" }}>
              {community.map((item) => (
                <TableRow
                  key={item._id}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#F9F5FF",
                      cursor: "pointer",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      border: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center", // vertical center
                      width: "100%",
                    }}
                  >
                    {/* Category Name aligned left */}
                    <span className="font-medium text-gray-800">
                      {item.communityName}
                    </span>

                    {/* Buttons aligned right and centered vertically */}
                    <div className="flex items-center gap-4">
                      <Link to={`/community/${item._id}/edit`}>
                        <CiEdit className="text-blue-600 text-[18px] hover:text-blue-800" />
                      </Link>
                      <button
                        onClick={() => {
                          setShowDeletePopup(true);
                          setDeleteId(item._id);
                          setDeleteType("community");
                        }}
                      >
                        <MdDeleteOutline className="text-red-500 text-[18px] hover:text-red-700" />
                      </button>
                    </div>
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

export default CommunityList;
