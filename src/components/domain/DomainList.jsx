import React from "react";
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

const DomainList = () => {
  const { loading, category } = useGetAllCategory(); // Call the hook to fetch categories

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      {category.length === 0 ? (
        <div>No categories available at the moment.</div>
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="category table">
            <TableBody>
              {category.map((item) => (
                <TableRow key={item._id}>
                  <TableCell component="th" scope="row">
                    {item.categoryName}
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
