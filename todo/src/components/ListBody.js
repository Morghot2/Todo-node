import React, { useState } from "react";

import { useGetUsersQuery } from "../redux/slices/apiSlice";

import { Link, useNavigate  } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import TablePagination from "@mui/material/TablePagination";
import PaginationItem from "@mui/material/PaginationItem";
import User from "./User";

const ListBody = () => {
  let navigate = useNavigate();
  const { data } = useGetUsersQuery();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    navigate(`${newPage}`)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const USER_PATH = "/";

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => {
                return <User key={user.id} position={data.indexOf(user)} />;
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[3, 5, 10]}
          component="div"
          count={data?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          // renderItem={(item) => (
          //   <PaginationItem
          //     component={NavLink}
          //     to={`/?page=${item.page}`}
          //     {...item}
          //   />
          // )}
        />
      </TableContainer>
    </>
  );
};

export default ListBody;
