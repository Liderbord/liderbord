import React, { useEffect } from "react";
import LiderbordCard from "../components/LiderbordCardComponent";
import HappyButton from "../components/HappyButton";
import HappyTextField from "../components/HappyTextField";
import Liderbord from "../model/liderbord";
import { Typography, Stack, Container, Grid, Box } from "@mui/material";
import FilterItem from "../components/FilterItem";
import { useNavigate, Navigate } from "react-router-dom";
import liderbordLogo from "../res/icons/resourceTypes/liderbordLogo.svg";
import { Service } from "../service/service";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function SearchLiderbord(props: any) {
  const navigate = useNavigate();

  // temporary data for view
  const [results, setResults] = useState<Liderbord[]>();
  const {name} = useParams();


  useEffect(()=>{  
    const loadLiderbords = async () => {
      await Service.searchLiderbordByName(name ?? "").then((response) => setResults(response));
    };
    loadLiderbords(); 
    
 },[name]
  );
  console.log(results);

  const goToCreateLiderbord = () => {
    // This will navigate to second component
    navigate("/create-liderbord");
  };



  const liderbord1: Liderbord = {
    id: "111",
    topic: "ADVANCED C++",
    description:
      "High level C++ courses, these courses should focus only on the more advanced concepts of teh c++ langauge. Basic c++ introductions are not welcome",
    tags: ["programming", "advanced", "C++"],
    nbVotes: 2,
    nbResources: 3,
    resources: [],
  };

  const liderbords : Liderbord[] = [];

  results?.map((obj, index) => {
    let term = obj;
    const data: Liderbord = {
        id: "113",
        topic: term.topic,
        description: term.description, 
        tags: term.tags, 
        resources: [],
        nbResources: term.nbResources,
    };
    liderbords.push(data);
})

  const filters = ["C++", "Beginner", "Advanced"];

  return (
    <Container>
      <div
        className="App"
        style={{
          margin: "10px 0px",
          alignItems: "center",
          display: "flex",
          justifyContent: "left",
        }}
      >
        <img src={liderbordLogo} alt="Liderbord Logo" style={{width:"35%"}} />
      </div>

      <HappyTextField fullWidth></HappyTextField>

      <Grid container spacing={7} columns={16} sx={{ mt: "0.5px" }}>
        <Grid item xs={11}>
          <Typography variant="h6">FILTERS</Typography>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={5} columns={16}>
              {filters.map((filter) => (
                <Grid item xs={4}>
                  <FilterItem>{filter}</FilterItem>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={5}>
          <HappyButton color="secondary" variant="contained" sx={{}} onClick={goToCreateLiderbord}>
            + Create a Liderbord
          </HappyButton>
        </Grid>
      </Grid>

      <Stack spacing={2} sx={{ marginTop: "20px" }} alignItems="center">
        {liderbords.map((liderbord, index) => (
          <LiderbordCard key={index} liderbord={liderbord} />
        ))}
      </Stack>
    </Container>
  );
}
