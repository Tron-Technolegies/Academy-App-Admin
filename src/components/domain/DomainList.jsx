import React, { useContext } from "react";
import useGetAllCategory from "../../hooks/courseCategories/useGetAllCategory"; // Adjust path based on your folder structure
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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useDeleteCategory from "../../hooks/courseCategories/useDeleteCategory";
import { AdminContext } from "../../utils/AdminContext";

const DomainList = () => {
  const { loading, category } = useGetAllCategory(); // Call the hook to fetch categories
  const { deleteCategory } = useDeleteCategory();

  const {
    showDeletePopup,
    setShowDeletePopup,
    deleteId,
    setDeleteId,
    setDeleteType,
  } = useContext(AdminContext);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="">
      {category.length === 0 ? (
        <div>No categories available at the moment.</div>
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="category table">
            <TableBody sx={{ border: "none" }}>
              {category.map((item) => (
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
                    {item.categoryName}
                    <Link
                      to={`/domain/${item._id}/edit`}
                      className=" mt-auto text-[#5B93FF] hover:text-[#bed1f9] "
                    >
                      <EditIcon />
                    </Link>
                    <button
                      onClick={() => {
                        deleteCategory({ id: item._id });
                        setDeleteType("category");
                        setShowDeletePopup(true);
                      }}
                    >
                      <DeleteIcon />
                    </button>
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

export default DomainList;
