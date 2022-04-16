import React from "react";
import { useMoralis } from "react-moralis";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Moralis from "moralis";
import { useState } from "react";
import { Liderbord } from "../back_end/models/liderbord";
import { Grid, Typography } from "@mui/material";
import FormBlock from "../components/FormBlock";
import HappyButton from "../components/HappyButton";
import HappyTextField from "../components/HappyTextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

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
    const params = { title: topic, desc: description, tags: tag };

    const liderbord = new Liderbord(topic, description);
    liderbord.createLiderbord();
  };
  //  onChange={e => setTopic(e.target.value)}

  return (
    <Container>
      <CssBaseline />
      <Box component="form" noValidate autoComplete="off">
        <Typography variant="h1" component="h1" sx={{ margin: "16px 0px" }}>
          New Liderbord
        </Typography>
        <Box sx={{ marginBottom: "27px" }}>
          <Typography variant="h2" component="h2" sx={{ margin: "16px 0px" }}>
            Topic
          </Typography>
          <Typography sx={{ margin: "16px 0px" }}>{description}</Typography>
          <HappyTextField fullWidth label="Topic" />
        </Box>

        <FormBlock
          title="Description"
          description="Please describe in detail the topic so that readers can understand
          what ressources you are looking for here."
          textFieldLabel="Description"
          multiline={true}
        />
        <FormBlock
          title="Tags"
          description="Tags help users find your liferbord, please include a minimum of 3 tags. 
          Tags must start with a hashtag and cannot have spaces."
          textFieldLabel="Tags"
        />

        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <HappyButton
            onClick={goToMainPage}
            variant="contained"
            sx={{ marginRight: "24px" }}
          >
            Cancel
          </HappyButton>
          <HappyButton color="secondary" variant="contained" onClick={submit}>
            Submit
          </HappyButton>
        </Grid>
      </Box>
    </Container>
  );
}

export default CreateLiderbord;
