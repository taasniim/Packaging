import React from 'react';
import { Grid, TextField, Button, Typography, Link } from '@material-ui/core';
import LoginAppBar from '../components/LoginAppBar';
import { useState } from 'react';
import SignUpImg from '../assets/signupim.png';
import Box from '@mui/material/Box';
import axios from 'axios';


const SignUp = () => {
    const [full_name, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [company_name, setCompanyname] = useState('');
    const [mail, setMail] = useState('');
    const [Phone_Number, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const [value, setValue] = useState(0);
  
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch('http://localhost:5000/api/users/signup', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ full_name, company_name,mail, Phone_Number, password })
          });
  
          if (!response.ok) {
              // Handle the case where the request was not successful
              throw new Error('Network response was not ok');
          }
  
          const responseData = await response.json();
          // Handle successful response here
          console.log(responseData);
          window.location.href = '/';
      } catch (error) {
          setError(error.message);
      }
  };
  
  

  return (
    <>
      <LoginAppBar />
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <img src={SignUpImg} alt="/" style={{ width: '80%', height: '80%', marginTop: '50px' }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h6" noWrap component="div" style={{ fontWeight: 'bold', color: 'navy', marginTop: '100px' }}>
                Sign Up 
              </Typography>
            </Grid>
            <Grid item>
            <Box sx={{ width: '90%', bgcolor: 'background.paper' }}>
                <form onSubmit={handleSubmit} action = "POST">
          <Typography variant="h10"  style={{color:'navy' , marginBottom: '10px'}}>Full Name</Typography>
           <TextField id="name" label="Enter your full name" variant="outlined"fullWidth style={{ marginBottom: '20px' }}   value={full_name}
          onChange={(e) => setFullname(e.target.value)}/>
           <Typography variant="h10"  style={{color:'navy' , marginBottom: '10px'}}>Company Name ( optional)</Typography>
           <TextField id="company_name" label="enter your company name" variant="outlined" fullWidth style={{ marginBottom: '20px' }} value={company_name}
          onChange={(e) => setCompanyname(e.target.value)}/>
          <Typography variant="h10"  style={{color:'navy' , marginBottom: '10px'}}>Email</Typography>
           <TextField id="Email" label="@example.com" variant="outlined"fullWidth style={{ marginBottom: '20px' }}  value={mail}
          onChange={(e) => setMail(e.target.value)}/>
           <Typography variant="h10"  style={{color:'navy' , marginBottom: '10px'}}>Phone Number</Typography>
           <TextField id="phone_number" label="enter your Mobile Number" variant="outlined" fullWidth style={{ marginBottom: '20px' }} value={Phone_Number}
          onChange={(e) => setPhoneNumber(e.target.value)}/>
           <Typography variant="h10"  style={{color:'navy' , marginBottom: '10px'}}>Password</Typography>
           <TextField id="Password" label="enter your password" variant="outlined" fullWidth style={{ marginBottom: '20px' }} value={password}
          onChange={(e) => setPassword(e.target.value)}/>
           <Button type="submit" color="primary" variant="contained" style={{mt: 2 , bgcolor: '#000080' }} fullWidth onClick={handleSubmit} >
                Sign Up
              </Button>
              </form>
              </Box>
            </Grid> 
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
