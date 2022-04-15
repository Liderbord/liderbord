import React from "react";
import { useMoralis } from "react-moralis";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Moralis from "moralis";
import { useState } from 'react';
import {Liderbord} from "../back_end/models/liderbord";

function CreateLiderbord() {

    const navigate = useNavigate();

    const goToMainPage = () => {
        // This will navigate to second component
        navigate("/MainPage");
      };

      const [topic, setTopic] = useState("");
      const [description, setDescription] = useState("");
      const [tag, setTag] = useState("");


      const submit = async () => {
        
        const params =  { title: topic, desc: description, tags: tag };
        
        const liderbord= new Liderbord(topic,description);
       liderbord.createLiderbord();

         

      }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
        <div>NEW LIDERBORD</div>
        <div>
        <TextField onChange={e => setTopic(e.target.value)} id="outlined" label="Topic" />
      </div>
      <div>
        <TextField onChange={e => setDescription(e.target.value)} id="outlined" label="Description" />
      </div>
      <div>
        <TextField onChange={e => setTag(e.target.value)} id="outlined" label="Tag" />

      </div>
      <div>
        <Button onClick={goToMainPage} variant="contained">Cancel</Button>{" "}
        <Button onClick={submit} variant="contained">Submit</Button>{" "}
      </div>
    </Box>
  );
}

export default CreateLiderbord;
