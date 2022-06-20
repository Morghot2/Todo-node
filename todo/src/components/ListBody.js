import React, { useState, useEffect } from "react";

import { useGetUsersQuery } from "../redux/slices/apiSlice";

import { Link, useNavigate, useLocation, useParams } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import User from "./User";

const ListBody = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const params = useParams();
  // console.log(location);
  // console.log(params);
  // console.log(typeof parseInt(params.page))

  const { data } = useGetUsersQuery();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    navigate(`${newPage}`);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  // if (Object.keys(params).length === 0) {
  //   setPage(0);
  // } else {
  //   if (parseInt(params.page) === page) {
  //     console.log("Git");
  //   } else {
  //     setPage(parseInt(params.page));
  //   }
  // }

  // console.log(page);
  // console.log(parseInt(params.page));
  
  useEffect(() => {
    navigate(`0`);
  }, [])

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
              ?.slice(
                parseInt(params.page) * rowsPerPage,
                parseInt(params.page) * rowsPerPage + rowsPerPage
              )
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
          page={parseInt(params.page)}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};

export default ListBody;
