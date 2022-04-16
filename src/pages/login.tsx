import React from "react";
import "../styles/login.css";
import { useMoralis } from "react-moralis";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Moralis from "moralis";
import HappyButton from "../components/HappyButton";

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

  const navigate = useNavigate();

  const login = async () => {
    const hello = await Moralis.Cloud.run("hello");
    console.log(hello);
    const user = await Moralis.authenticate({
      provider: "web3Auth",
      clientId:
        "BAx6pTNUl7kRemTtndnJoIs_X4Memkfgz2pLkbvbhyi7Ipvjj4YGIOx6ksc4LbLrOeQcX_VM4uLeg71AAx-yRjI",
    });

    navigate("/mainPage");
  };

  const goToRegisterPage = () => {
    // This will navigate to second component
    navigate("/register");
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  return (
    <Box id="loginform">
      <HappyButton title="Log in" onClick={login}>
        Login{" "}
      </HappyButton>
      <HappyButton title="Register" onClick={goToRegisterPage}>
        Register
      </HappyButton>
      <HappyButton onClick={logOut} disabled={isAuthenticating}>
        Logout
      </HappyButton>
    </Box>
  );
}

export default Login;
