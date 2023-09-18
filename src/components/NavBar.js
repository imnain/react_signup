import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

const boxStyle = {border: '1px solid red', background:'red'}
const toolStyle = {border: '1px solid blue'}
const typoStyle = {border: '1px solid green'}

export default function NavBar() {
    //I am using border style just to check the behaviour of different boxes, grids etc
  return (
    <Box sx={{ flexGrow: 5 }} style={boxStyle}>
      <AppBar position="static">
        <Toolbar style={toolStyle}>
         
        <IconButton color="inherit" aria-label="menu">
            <MenuIcon  />
          </IconButton>
        <Typography style={typoStyle} variant="h6" component="div" sx={{ ml: 'auto' }}>
            Home
          </Typography>
          <Typography style={typoStyle} variant="h6" component="div" sx={{ ml: 2 }}>
            About
          </Typography>
          <Typography style={typoStyle} variant="h6" component="div" sx={{ ml: 2 }}>
            Contact us
          </Typography>
          <Button style={typoStyle} sx={{ ml: 2 }} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}