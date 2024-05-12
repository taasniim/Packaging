import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button, Typography, Link } from '@material-ui/core';
import LoginAppBar from '../components/LoginAppBar';
import loginImg from '../assets/loginim.png';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Login = ({updateid}) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [Phone_Number, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [value, setValue] = useState(0); 
  const [idUser,setUserID]=useState(null);
  
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mail,Phone_Number, password }),
        });

        if (!response.ok) {
            // Handle other cases, such as wrong password or invalid user
            alert("Invalid email or password");
            return;
        }

        // Assuming response status is 200 (OK)
        const data = await response.json(); 
        console.log('data login',data.data._id);
        setUserID(data.data._id)  
        updateid(data.data._id)
        console.log('data login userid',data.data._id);
        // Handle successful login (e.g., store token, redirect user)
        // For example:
        localStorage.setItem('token', data.token);
        navigate('/home'); // Redirect to homepage
    } catch (error) {
        // Handle network errors or server errors
        console.error('Error during login:', error);
        alert("An error occurred during login");
    }
};

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000080',
      },
    },
  });

  return (
    <>
      <LoginAppBar />
      <Grid container justifyContent="center" >
        <Grid item xs={12} sm={6}>
          <img src={loginImg} alt="/" style={{ width: '90%', height: '100%', marginTop: '50px' }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h6" noWrap component="div" style={{ fontWeight: 'bold', color: 'navy', marginTop: '200px' }}>
                Sign In
              </Typography>
            </Grid>
            <Grid item>
              <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ThemeProvider theme={theme}>
                  <Tabs value={value} onChange={handleChange} centered
                    textColor="inherit"
                    indicatorColor="primary"
                    aria-label="primary tabs example"
                    sx={{ color: 'navy' }}>
                    <Tab label="E-mail" />
                    <Tab label="Phone Number" />
                  </Tabs>
                  {value === 0 && (
                    <form onSubmit={handleLogin} action='POST'>
                      <Typography variant="h10" style={{ color: 'navy', marginBottom: '10px' }} >Email</Typography>
                      <TextField id="mail" label="@example.com" variant="outlined" fullWidth style={{ marginBottom: '20px' }} value={mail}
                        onChange={(e) => setMail(e.target.value)} />
                      <Typography variant="h10" style={{ color: 'navy', marginBottom: '10px' }}>Password</Typography>
                      <TextField id="password" label="Enter your password" variant="outlined" fullWidth style={{ marginBottom: '20px' }} value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    </form>
                  )}
                  {value === 1 && (
                    <form>
                      {/* Form fields specific to the phone number tab */}
                      <Typography variant="h10" style={{ color: 'navy', marginBottom: '10px' }}>Phone Number</Typography>
                      <TextField id="Phone number" label="Your phone number" variant="outlined" fullWidth style={{ marginBottom: '20px' }} value={Phone_Number}
                        onChange={(e) => setPhoneNumber(e.target.value)}/>
                      <Typography variant="h10" style={{ color: 'navy', marginBottom: '10px' }}>Password</Typography>
                      <TextField id="Password" label="Enter your password" variant="outlined" fullWidth style={{ marginBottom: '20px' }}  value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    </form>
                  )}
                </ThemeProvider>
              </Box>
              <Typography variant="h10">
                <Link href="#" style={{ color: 'grey' }}>Forgot password ?</Link>
              </Typography>
              <Button type="submit" color="primary" variant="contained" style={{ marginTop: 2, bgcolor: 'navy' }} fullWidth onClick={handleLogin}>
                Sign in
              </Button>
            </Grid>
            <Grid item>
              <Typography>
                Not a member yet? <Link href="/signup">Sign Up</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
