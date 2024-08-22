import React, { useEffect, useState } from 'react'
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
import { useNavigate } from 'react-router-dom';




const defaultTheme = createTheme()
function Register() {

  const navigate = useNavigate()
  const [formdata, setFormdata] =  useState({
    email:"",
    password:""
  })

  const handleChange = (e)=>{
    const { name, value} = e.target;
    setFormdata({
      ...formdata, [name]:[value]
    })
    localStorage.setItem('email', formdata.email)
  }
  

  const handleSubmit = (e) => {
    localStorage.setItem('email', formdata.email)
    localStorage.setItem('password', formdata.password);
    navigate('/login')
  };
  
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
           Register
          </Typography>
          <Box component="form" sx={{ mt:1 }} onSubmit={handleSubmit} >
            <TextField 
              onChange={handleChange}
              margin="normal"
              fullWidth 
              id='email'
              label='Email Adress'
              name='email'
              autoComplete='email'
              error={!!errors.email}
              helperText={errors.email}
              autoFocus></TextField>
            <TextField 
              onChange={handleChange}
              margin="normal"
              fullWidth 
              id='password'
              label='Password'
              name='password'
              autoComplete='current-password'
              error={!!errors.password}
              helperText={errors.password}
               ></TextField>
            
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
              Register
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}

export default Register