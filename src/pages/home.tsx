import React from "react";
import { useMoralis } from "react-moralis";
import { Typography, Stack, Container, Grid, Box } from "@mui/material";
import HappyButton from "../components/HappyButton";
import SearchBar from "../components/SearchBar";
import SearchIcon from '@mui/icons-material/Search';
import liderbordLogo from "../res/icons/resourceTypes/liderbordLogo.svg";

import { useNavigate, Navigate } from "react-router-dom";

function HomePage() {
  let { isAuthenticated, logout } = useMoralis();
  const navigate = useNavigate();

  const goToCreateLiderbord = () => {
    // This will navigate to second component
    navigate("/create-liderbord");
  };

  const goToSearchLiderbord = () => {
    navigate("/search");
  };

  if (!isAuthenticated) {
    return <Navigate replace to="/login" />;
  }
  return (
    <Container>
      <div
        className="App"
        style={{ margin: "120px 0px", alignItems: "center", display: "flex", justifyContent: "center" }}
      >
        <img src={liderbordLogo} alt="Liderbord Logo" />
      </div>

      <SearchBar></SearchBar>

      <Grid
        container
        justifyContent="center"
        rowSpacing={9}
        columns={10}
        sx={{ mt: "10px" }}
      >
        <Grid item xs={3}>
          <HappyButton color="secondary" variant="contained">
            Search Liderbords
          </HappyButton>
        </Grid>

        <Grid item xs={3}>
          <HappyButton
            sx={{ color: "black", backgroundColor: "#E3E3E3" }}
            variant="contained"
          >
            + Create a Liderbord
          </HappyButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
