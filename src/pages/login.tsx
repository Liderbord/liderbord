import React from "react";
import "../styles/login.css";
import { useMoralis } from "react-moralis";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user!.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const navigate = useNavigate();

  const goToRegisterPage = () => {

      // This will navigate to second component
      navigate('/register'); 
    };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="outlined" label="Email" />
      </div>
      <div>
        <TextField
          id="password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
      <div>
        <Button onClick={goToRegisterPage} variant="contained">Register</Button>{" "}
        <Button variant="contained">Log in</Button>{" "}
      </div>
    </Box>
  );
}

export default Login;
