import React from "react";
import LiderbordCard from "../components/LiderbordCardComponent";
import HappyButton from "../components/HappyButton";
import Liderbord from "../model/liderbord";
import { Typography, Stack, Container, Grid, Box } from "@mui/material";
import FilterItem from "../components/FilterItem";
import { useNavigate, Navigate } from "react-router-dom";

export default function SearchLiderbord(props: any) {
  const navigate = useNavigate();

  // temporary data for view

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

  const liderbord2: Liderbord = {
    id: "112",
    topic: "BEGINNER C++",
    description:
      "Best introduction to C++, for people that have never programmed",
    tags: ["programming", "beginner", "C++"],
    nbVotes: 400,
    nbResources: 25,
    resources: [],
  };

  const liderbord3: Liderbord = {
    id: "113",
    topic: "TESTING IN C++",
    description: "Best testing frameworks on C++, best way to test your code",
    tags: ["programming", "advanced", "C++", "testing"],
    nbVotes: 300,
    nbResources: 25,
    resources: [],
  };

  const liderbords = [liderbord1, liderbord2, liderbord3];

  const filters = ["C++", "Beginner", "Advanced"];

  return (
    <Container>
      
      <Grid container spacing={7} columns={16} sx={{ mt: "16px" }}>
        <Grid item xs={12}>
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

        <Grid item xs={4}>
          <HappyButton color="secondary" variant="contained">
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
