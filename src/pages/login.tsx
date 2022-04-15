import React from "react";
import "../styles/login.css";
import { useMoralis } from "react-moralis";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/theme";
import { useNavigate } from "react-router-dom";
import HappyButton from "../components/HappyButton";
import Moralis from "moralis/types";

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
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <img src={require("../res/logo.png")} alt="failure" />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <div>
              <HappyButton
                color="secondary"
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </HappyButton>
              <HappyButton
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </HappyButton>
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
