import logo from './logo.svg';
import './App.css';
import {Grid, Paper, TextField, Button, Typography, Checkbox, FormGroup, FormControlLabel} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/Signup';


const paperStyle = {padding:20, height:'65vh', width:350, margin:"20px auto"}
const gridStyle = {border: '1px', margin:"15px auto"}



function App() {
  return (
    <>
    <NavBar />
    <SignUp />
    </>
  );
}

export default App;
