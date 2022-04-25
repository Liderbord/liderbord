import React from "react";
import { useMoralis } from "react-moralis";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function HomePage() {


    const navigate = useNavigate();


      const goToCreateLiderbord = () => {
        // This will navigate to second component
        navigate('/create-liderbord'); 
      };


  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>

        <TextField id="outlined" label="Search" />
      </div>

      <div>
        <Button variant="contained">Search Liderbords</Button>{" "}

        <Button onClick={goToCreateLiderbord} variant="contained">+ Create Liderbords</Button>{" "}

      </div>
    </Box>
  );
}



export default HomePage;
