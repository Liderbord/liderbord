import React from "react";
import NavigationBar from "../components/NavigationBar";
import LiderbordCard from "../components/LiderbordCardComponent";
import HappyButton from "../components/HappyButton";
import HappyTextField from "../components/HappyTextField";
import Liderbord from "../model/liderbord";
import { Typography, Stack, Container, Grid, Box, Link } from "@mui/material";
import FilterItem from "../components/FilterItem";
import { useNavigate } from "react-router-dom";
import liderbordLogo from "../res/icons/resourceTypes/liderbordLogo.svg";
import { Service } from "../service/service";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function SearchLiderbord(props: any) {
  const navigate = useNavigate();

  const [results, setResults] = useState<Liderbord[]>();
  const [liderbordName, setLiderbordName] = useState("");
  const {name} = useParams();

  const keyPress = async (e: any) =>{
    if(e.keyCode === 13){
      navigate("/search/"+liderbordName);
    }
  }

  useEffect(()=>{  
    const loadLiderbords = async () => {
      await Service.searchLiderbordByName(name ?? "").then((response) => setResults(response));
    };
    loadLiderbords(); 
 },[name]
  );
  


  const liderbords : Liderbord[] = [];

  results?.map((obj, index) => {
    let term = obj;
    const data: Liderbord = {
        id: term.id,
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
      <NavigationBar/>
   

      <HappyTextField sx={{mt: 15}} fullWidth onChange={(e: any) => setLiderbordName(e.target.value)} onKeyDown={keyPress} ></HappyTextField>
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
          <HappyButton onClick={() => navigate("/create-liderbord")} color="secondary" variant="contained" sx={{}}>
            + Create a Liderbord
          </HappyButton>
        </Grid>
      </Grid>

      <Stack spacing={2} sx={{ marginTop: "20px" }} alignItems="center">
        {liderbords.map((liderbord, index) => (
          <Link
          underline="none"
          onClick={() => {
            navigate("/l/"+liderbord.id);
          }}>
          <LiderbordCard key={index} liderbord={liderbord} />
          </Link>
            
          
        ))}
      </Stack>
    </Container>
  );
}
