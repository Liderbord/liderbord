import React from 'react';
import { useState } from 'react';

import '../styles/login.css'
import { useMoralis } from "react-moralis";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Moralis from 'moralis';
import { useNavigate } from "react-router-dom";


const FormHeader = (props: any) => (
<h2 id="headerTitle">{props.title}</h2>
);


function Login() {
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    const navigate = useNavigate()
    

    const login = async () => {
        const hello=await Moralis.Cloud.run("hello");
        console.log(hello);
        const user = await Moralis.authenticate({
            provider: "web3Auth",
            clientId: "BAx6pTNUl7kRemTtndnJoIs_X4Memkfgz2pLkbvbhyi7Ipvjj4YGIOx6ksc4LbLrOeQcX_VM4uLeg71AAx-yRjI",
          })

          navigate('/MainPageConnected');
    }
    
    

    const logOut = async () => {
        await logout();
        console.log("logged out");
    }


    

  return (
      <div id="loginform">
        <FormHeader title="Welcome to Liderbord, please login" />

        
        <button title="Log in"  onClick={login} >Login </button>
    
        <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
      </div>
  );
}



export default Login;