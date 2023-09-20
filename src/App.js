import React from 'react';
import {Grid, Paper, TextField, Button, Typography, Checkbox, FormGroup, FormControlLabel} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/Signup';

import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import Counter from './components/Counter';
import SearchFilter from './components/SearchFilter';


function App() {
  return (
    <>
       <Router>
        <NavBar />
        <Counter />
        <SearchFilter />
       <Routes>
       <Route path='/login' element={<Login />} />
       <Route path='/signup' element={<SignUp />} />
       <Route path='/' />
         
        </Routes>
       </Router>
       
    
    </>
  );
}

export default App;
