import React, { useState, useEffect } from "react";
import "../styles/login.css";
import { useMoralis } from "react-moralis";
import { ThemeProvider } from "@mui/material/styles";
import { useNavigate, Navigate } from "react-router-dom";
import Moralis from "moralis";
import HappyButton from "../components/HappyButton";
import moralisKeys from "../moralis-keys.json";
import { Container } from "@mui/material";

function Login() {
  const navigate = useNavigate();

  // Try getting user info from Moralis, normally it should be null
  const { isAuthenticated, user, authenticate } = useMoralis();
  const [loginUser, setloginUser] = useState(user);

  const login = async () => {
    if (!isAuthenticated) {
      const tempUser = await authenticate({
        provider: "web3Auth",
        clientId: moralisKeys.appId,
        theme: "light",
        appLogo:
          "https://raw.githubusercontent.com/Liderbord/liderbord/master/public/logo512.png",
      });
      setloginUser(tempUser ?? null);
      navigate("/");
    }
  };

  useEffect(() => {
    if (loginUser != null) {
      navigate("/");
    }
  }, [loginUser]);

  // if the user is logged in, redirect to homepage
  if (loginUser !== null) {
    return <Navigate replace to="/" />;
  }

  // else, give the login button
  return (
    <Container id="loginform">
      <HappyButton title="Log in" onClick={login}>
        Login
      </HappyButton>
    </Container>
  );
}

export default Login;
