import React, { useContext, useEffect } from "react";
import useGetAllChatRoom from "../../hooks/chatRoom/useGetAllChatRoom";
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
import useDeleteChatRoom from "../../hooks/chatRoom/useDeleteChatRoom";
import { AdminContext } from "../../utils/AdminContext";

const ChatRoomList = () => {
  const { loading, chatRoom, refetch } = useGetAllChatRoom();
  const { deleteChatRoom } = useDeleteChatRoom();
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
    <TableContainer component={Paper}>
      <Table aria-label="chat room table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Community</strong>
            </TableCell>
            <TableCell>
              <strong>Sub Community</strong>
            </TableCell>
            <TableCell>
              <strong>Chat Room</strong>
            </TableCell>
            <TableCell
              sx={{
                border: "none",
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
              }}
            >
              <strong>Actions</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {chatRoom.map((item) => (
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
                {item.relatedSubCommunity?.subCommunityName ||
                  "Unknown Sub Community"}
              </TableCell>
              <TableCell sx={{ border: "none" }}>{item.chatRoomName}</TableCell>
              <TableCell
                sx={{
                  border: "none",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "10px",
                }}
              >
                <Link
                  to={`/community/chatRoom/${item._id}/edit`}
                  className="mt-auto text-[#5B93FF] hover:text-[#bed1f9]"
                >
                  <CiEdit className="text-blue-600 text-[18px] hover:text-blue-800" />
                </Link>
                <button
                  onClick={() => {
                    setShowDeletePopup(true);
                    setDeleteId(item._id);
                    setDeleteType("chatRoom");
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ChatRoomList;
