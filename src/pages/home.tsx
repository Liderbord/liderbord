import React from "react";
import Moralis from "moralis";
import { useMoralis } from "react-moralis";
import HappyButton from "../components/HappyButton";
import HappyTextField from "../components/HappyTextField";
import { useState } from "react";
import { Typography, Stack, Container, Grid, Box } from "@mui/material";
import liderbordLogo from "../res/icons/resourceTypes/liderbordLogo.svg";
import { Service } from "../service/service";
import { useNavigate, Navigate } from "react-router-dom";

function HomePage() {
  const [liderbordName, setLiderbordName] = useState("");
  let { isAuthenticated, logout } = useMoralis();
  const navigate = useNavigate();

  const goToCreateLiderbord = () => {
    // This will navigate to second component
    navigate("/create-liderbord");
  };


  async function inputHandler(this: any){
  
    navigate("/search/"+liderbordName);
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
        label=""
        onChange={(e: any) => setLiderbordName(e.target.value)}
      />

      <Grid
        container
        justifyContent="center"
        rowSpacing={9}
        columns={10}
        sx={{ mt: "10px" }}
      >
        <Grid item xs={3}>
          <HappyButton
            color="secondary"
            variant="contained"
            onClick={inputHandler}
          >
            Search Liderbords
          </HappyButton>
        </Grid>

        <Grid item xs={3}>
          <HappyButton color="info" variant="contained" onClick={goToCreateLiderbord}>
            + Create a Liderbord
          </HappyButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;