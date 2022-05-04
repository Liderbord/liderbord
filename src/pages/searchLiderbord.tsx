import React from "react";
import NavigationBar from "../components/NavigationBar";
import LiderbordCard from "../components/LiderbordCardComponent";
import HappyButton from "../components/HappyButton";
import HappyTextField from "../components/HappyTextField";
import Liderbord from "../model/liderbord";
import { Typography, Stack, Container, Grid, Box, Link } from "@mui/material";

import { useNavigate } from "react-router-dom";
import liderbordLogo from "../res/icons/resourceTypes/liderbordLogo.svg";
import { Service } from "../service/service";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { emitKeypressEvents } from "readline";


export default function SearchLiderbord(props: any) {
  const navigate = useNavigate();

  const [results, setResults] = useState<Liderbord[]>();
  const {name} = useParams();
  const [liderbordName, setLiderbordName] = useState("");
  const [keyCode, setKeyCode] = useState("");
  
  const keyPress = async (e: any) =>{
    if(e.keyCode == 13){
      //await Service.searchLiderbordByName(liderbordName ?? "").then((response) => setResults(response));
      setKeyCode("13");
    }
  }

  useEffect(()=>{  
    const loadLiderbords = async () => {
      if (!liderbordName){
        await Service.searchLiderbordByName(name ?? "").then((response) => setResults(response));
      } else {
        await Service.searchLiderbordByName(liderbordName ?? "").then((response) => setResults(response));
        setLiderbordName("");
        setKeyCode("");
      }
      
    };
    loadLiderbords(); 
    
 },[name, keyCode]
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

      <Grid container spacing={7} columns={16} sx={{ mt: "0.5px", ml:"800px" }}>


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
