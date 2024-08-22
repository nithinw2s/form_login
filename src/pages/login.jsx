import React, { useState } from 'react'
import {createTheme , ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Avatar, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import { Copyright, Password } from '@mui/icons-material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';


const defaultTheme = createTheme()   
function Login() {

  const navigate = useNavigate()
  const [formLogindata, setformlogindata ] = useState({
    email:'',
    password:""
  })
  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');
  console.log(storedEmail, storedPassword);
  console.log(formLogindata.email, formLogindata.password[0]);

  const handlevalidation = () => {
    (storedEmail == formLogindata.email && storedPassword == formLogindata.password) 
    ? navigate('/home') 
    : console.log("provide the valid mail and password")

  };


  const handleChange = (e)=>{
    const { name, value} = e.target;
    setformlogindata({
      ...formLogindata, [name]:[value]
    })
  }  

  return (
    <ThemeProvider theme={defaultTheme} >
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: "1px solid white",
          padding:3,
          bgcolor: "#EEF7FF",
          borderRadius:3,
        }}
        >
          <Avatar sx={{ m:1, bgcolor: 'secondary.main' }} >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5' >
           LogIn
          </Typography>
          <Box component="form" sx={{ mt:1 }} onSubmit={handlevalidation} >
            <TextField
              onChange={handleChange} 
              margin="normal"
              fullWidth 
              id='email'
              label='Email Adress'
              name='email'
              autoComplete='email'
              autoFocus></TextField>
            <TextField
              onChange={handleChange}
              margin="normal"
              fullWidth 
              id='password'
              label='Password'
              name='password'
              autoComplete='current-password' ></TextField>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>

            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>

          </Box>

        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}

export default Login