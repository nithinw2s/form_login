import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const BasicTable = ({ userData }) => {
  if (!userData) {
    return <Typography variant="h6" color="error">No data available.</Typography>;
  }

  return (
    <TableContainer sx={{ mt: 2 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'><Typography variant="h5" gutterBottom>Name</Typography></TableCell>
            <TableCell align="center"><Typography variant="h5" gutterBottom>User Name</Typography></TableCell>
            <TableCell align="center"><Typography variant="h5" gutterBottom>Email</Typography></TableCell>
            <TableCell align="center"><Typography variant="h5" gutterBottom>City</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={userData.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center">{userData.firstName}</TableCell>
            <TableCell align="center">{userData.username}</TableCell>
            <TableCell align="center">{userData.email}</TableCell>
            <TableCell align="center">{userData.city}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
