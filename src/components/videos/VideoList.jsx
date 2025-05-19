import React, { useContext, useEffect } from "react";
import useGetAllVideo from "../../hooks/video/useGetAllVideo";
import useDeleteVideo from "../../hooks/video/useDeleteVideo"; // Create this hook for deleting videos
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
import { AdminContext } from "../../utils/AdminContext";

const VideoList = () => {
  const { loading, video, refetch } = useGetAllVideo();
  const { deleteVideo } = useDeleteVideo();
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

  if (loading) return <Loading />;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="video table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Video Name</strong>
            </TableCell>
            <TableCell>
              <strong>Video URL</strong>
            </TableCell>
            <TableCell>
              <strong>Related Module</strong>
            </TableCell>
            <TableCell>
              <strong>Related Course</strong>
            </TableCell>
            <TableCell>
              <strong>Duration</strong>
            </TableCell>
            <TableCell>
              <strong>Actions</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {video.map((item) => (
            <TableRow
              key={item._id}
              sx={{
                "&:hover": {
                  backgroundColor: "#EDE6F5",
                  cursor: "pointer",
                },
              }}
            >
              <TableCell sx={{ border: "none" }}>{item.videoName}</TableCell>
              <TableCell sx={{ border: "none" }}>
                <a
                  href={item.videoURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#5B93FF" }}
                >
                  View Video
                </a>
              </TableCell>
              <TableCell sx={{ border: "none" }}>
                {item.relatedModule?.moduleName || "N/A"}
              </TableCell>
              <TableCell sx={{ border: "none" }}>
                {item.relatedCourse?.courseName || "N/A"}
              </TableCell>
              <TableCell sx={{ border: "none" }}>
                {item.duration || "N/A"}
              </TableCell>
              <TableCell sx={{ border: "none" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <Link
                    to={`/videos/${item._id}/edit`} // Adjust your edit route here
                    className="text-[#5B93FF] hover:text-[#bed1f9]"
                  >
                    <CiEdit className="text-blue-600 text-[18px] hover:text-blue-800" />
                  </Link>
                  <button
                    onClick={() => {
                      setShowDeletePopup(true);
                      setDeleteId(item._id);
                      setDeleteType("video");
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                    }}
                    aria-label={`Delete video ${item.videoName}`}
                  >
                    <MdDeleteOutline className="text-red-500 text-[18px] hover:text-red-700" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
          {video.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} align="center">
                No videos found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VideoList;
