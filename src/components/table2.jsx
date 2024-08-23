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
import axios from 'axios';


export default function Table2() {

  const[data, setdata] = useState([])
//   const [dataIsLoaded, setDataIsLoaded] = useState(false); 

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        setdata(res.data);
    })
}, []
  );

  
  console.log("data from table2",data)

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
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.username}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.address.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
