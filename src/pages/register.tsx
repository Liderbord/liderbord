import React from "react";
import { useMoralis } from "react-moralis";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
import Moralis from 'moralis';
//npm install --save @web3auth/web3auth


function Register() {

    const navigate = useNavigate();


    const goToLoginPage = () => {
  
        // This will navigate to second component
        navigate('/login'); 
      };

      const registering = async () => {


        const user = await Moralis.authenticate({
          provider: "web3Auth",
          clientId: "BAx6pTNUl7kRemTtndnJoIs_X4Memkfgz2pLkbvbhyi7Ipvjj4YGIOx6ksc4LbLrOeQcX_VM4uLeg71AAx-yRjI",
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
