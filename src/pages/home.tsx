import React from "react";
import { useMoralis } from "react-moralis";
import HappyButton from "../components/HappyButton";
import HappyTextField from "../components/HappyTextField";
import { useState } from "react";
import { Container, Grid } from "@mui/material";
import liderbordLogo from "../res/icons/resourceTypes/liderbordLogo.svg";

import { useNavigate, Navigate } from "react-router-dom";

function HomePage() {
  const [liderbordName, setLiderbordName] = useState("");
  let { isAuthenticated } = useMoralis();
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

  const inputHandler = async () => {
    console.log(liderbordName);
    goToSearchLiderbord();
  };

  return (
    <Container>
      <div
        className="App"
        style={{
          margin: "120px 0px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={liderbordLogo} alt="Liderbord Logo" />
      </div>

      <HappyTextField
        fullWidth
        label="Enter a topic"
        onChange={(e: any) => setLiderbordName(e.target.value)}
      />

      <Grid
        container
        justifyContent="center"
        columns={10}
        spacing={4}
        sx={{ mt: "10px" }}
      >
        <Grid item>
          <HappyButton
            color="secondary"
            variant="contained"
            onClick={inputHandler}
          >
            Search Liderbords
          </HappyButton>
        </Grid>

        <Grid item>
          <HappyButton
            color="info"
            variant="contained"
            onClick={goToCreateLiderbord}
          >
            + Create a Liderbord
          </HappyButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;