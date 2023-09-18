import React from 'react';
import Button from '@mui/material/Button';
import { Box, Paper, Container, Grid, TextField, Typography } from '@mui/material';

const paperStyle = {padding:20, height:'55vh', width:280, margin:"20px auto"}
const buttonStyle = {marginTop:20}

function Login() {
  return (
      <Container maxWidth="sm">

      <Grid>
        <Paper elevation={3} style ={paperStyle}>
          <Grid align='center'>
          <h2> Login</h2>
          <TextField id='email' label = 'Email' variant='standard' type = 'email' fullWidth/>
      <TextField id='password' label = 'Password' variant='standard' type='password' fullWidth/>
      <Button
     color='primary'
     variant='contained'
     fullWidth
     style={buttonStyle}
     >Submit</Button>
          </Grid>
        </Paper>
      </Grid>
      </Container>
  );
}

export default Login;