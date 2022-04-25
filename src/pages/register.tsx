import React from "react";
import { useMoralis } from "react-moralis";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Moralis from 'moralis';
import moralisKeys from "../moralis-keys.json"




function Register() {

    const navigate = useNavigate();


    const goToLoginPage = () => {
  
        // This will navigate to second component
        navigate('/login'); 
      };


      const registering = async () => {


        const user = await Moralis.authenticate({
          provider: "web3Auth",
          clientId: moralisKeys.appId,
        })
  
        //const user = new Moralis.User();
        //user.set("username", username);
        //user.set("password", password);
        //user.set("email", email);
        //try {
          //await user.signUp();
        //} catch (error) {
         // alert("Error: ");
        //}

        navigate('/mainPage');

      }





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
        <Button onClick={goToLoginPage} variant="contained">Sign in</Button>{" "}
        <Button onClick={registering} variant="contained">Register</Button>{" "}

      </div>
    </Box>
  );
}

export default Register;
