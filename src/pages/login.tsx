
import React from "react";
import "../styles/login.css";
import { useMoralis } from "react-moralis";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/theme";
import { useNavigate } from "react-router-dom";


function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

    const navigate = useNavigate()
    

    const login = async () => {
        const hello=await Moralis.Cloud.run("hello");
        console.log(hello);
        const user = await Moralis.authenticate({
            provider: "web3Auth",
            clientId: "BAx6pTNUl7kRemTtndnJoIs_X4Memkfgz2pLkbvbhyi7Ipvjj4YGIOx6ksc4LbLrOeQcX_VM4uLeg71AAx-yRjI",
          })

          navigate('/mainPage');
    }
    
    


  const goToRegisterPage = () => {
    // This will navigate to second component
    navigate("/register");
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };


    

  return (

      <div id="loginform">
        <FormHeader title="Welcome to Liderbord, please login" />

        
        <button title="Log in"  onClick={login} >Login </button>
    
        <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
      </div>
  );
}



export default Login;
