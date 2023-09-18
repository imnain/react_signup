import React from "react";
import {Grid, Paper, TextField, Button, Typography, Checkbox, FormGroup, FormControlLabel} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const paperStyle = {padding:20, height:'65vh', width:350, margin:"20px auto"}
const gridStyle = {border: '1px', margin:"15px auto"}

export default function SignUp(){
    return (
        <Grid align='center' style={gridStyle}>
                
        <Paper style={paperStyle} >
          <Grid style={gridStyle}>
    
          <Grid style={gridStyle}>
            <PersonAddIcon />
          </Grid>
          <Typography variant="h6"> <b>Sign up </b></Typography>        
          </Grid>  
          
          <Grid container spacing={0.1} style={gridStyle} alignItems="flex-start">
              <Grid item xs={6} >
                <TextField
                  id='firstName'
                  label='FirstName'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id='lastName'
                  label='LastName'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
            </Grid>
          <Grid container spacing={2}>
    
          </Grid>
          <Grid  item style={gridStyle}>
              <TextField
                id='email' 
                label = 'Email' 
                variant='outlined' 
                type='email'
                fullWidth />
          </Grid>
          <Grid>
              <TextField 
                id='password' 
                label = 'Password' 
                variant='outlined' 
                type='password'
                fullWidth />
          
              </Grid>
              <Grid style={gridStyle}>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="remember me" />
                </FormGroup>
              </Grid>
              <Grid style={gridStyle}>
                <Button
                  color='primary'
                  variant='contained'
                  fullWidth
    
                  >SIGN UP
                </Button>
              </Grid>
    
              
          </Paper>
    
        </Grid>
      );
}