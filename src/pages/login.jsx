import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Container, Box, TextField, Typography, CssBaseline, Avatar } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .min(3,"Invalid email address format from mon")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
});


const theme = createTheme();

const Login = () => {
  

  
  const navigate = useNavigate()
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid white",
            padding: 3,
            bgcolor: "#EEF7FF",
            borderRadius: 3,
          }}
        >
          <Avatar sx={{ m:1, bgcolor: '#9c27b0'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            LogIn
          </Typography>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting, setErrors }) => {

              fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  username: values.email,
                  password: values.password,
                  expiresInMins: 30, // optional, defaults to 60
                })
              })
              .then(res => res.json())
              .then(async (jdata) => {
                if (jdata.token) {
                  // Successful login
                  console.log("token:",jdata.token);
                  navigate('/home');
                } else {
                  // Handle invalid credentials
                  setErrors({
                    email: 'Invalid email or password',
                    password: 'Invalid email or password',
                  });
                  console.error('Invalid login credentials: from then part');
                }
                setSubmitting(false);
              })
              .catch(error => {
                setErrors({
                  email: 'Invalid email or password',
                  password: 'Invalid email or password',
                });
                console.error('Login error: from catch', error);
                setSubmitting(false);
              });
              ;
              

            }}
          >
            {({ isSubmitting, touched, errors }) => (
              <Box component={Form} sx={{ mt: 1, width: '100%' }}>
                <div>
                  <Field
                    as={TextField}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={touched.email && Boolean(errors.email)}
                    helperText={<ErrorMessage name="email" />}
                  />
                </div>
                <div>
                  <Field
                    as={TextField}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    error={touched.password && Boolean(errors.password)}
                    helperText={<ErrorMessage name="password" />}
                  />
                </div>
                <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </Box>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
