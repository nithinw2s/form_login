import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';


export default function BasicTable() {

  const[data, setdata] = useState([])
  const [dataIsLoaded, setDataIsLoaded] = useState(false); 
  const [error, setError] = useState(null);


  if (!dataIsLoaded) {
    return (
      <div>
        <h1>Please wait some time....</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Alert severity="error">{error}</Alert>
      </div>
    );
  }

  console.log(data)

  return (
    <TableContainer sx={{mt:2 }}  component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center' ><Typography variant="h5" gutterBottom>
              Name
            </Typography></TableCell>
            <TableCell align="center"><Typography variant="h5" gutterBottom>
              User Name
            </Typography></TableCell>
            <TableCell align="center"><Typography variant="h5" gutterBottom>
              Email
            </Typography></TableCell>
            <TableCell align="center"><Typography variant="h5" gutterBottom>
              City
            </Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {data.map((row) => ( */}
            <TableRow
              key={data.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{data.id}</TableCell>
              <TableCell align="center">{data.firstName}</TableCell>
              <TableCell align="center">{data.email}</TableCell>
              <TableCell align="center">{data.gender}</TableCell>
            </TableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
