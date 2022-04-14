import React from "react";
import { useMoralis } from "react-moralis";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const goToLoginPage = () => {
  
        // This will navigate to second component
        navigate('/login'); 
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
        <TextField id="outlined" label="User" />
      </div>
      <div>
        <TextField id="outlined" label="Email" />
      </div>
      <div>
        <TextField
          id="password-input"
          label="Password"
          type="password"
        />
      </div>
      <div>
        <Button onClick={goToLoginPage} variant="contained">Sign in</Button>{" "}
        <Button variant="contained">Register</Button>{" "}
      </div>
    </Box>
  );
}

export default Register;
