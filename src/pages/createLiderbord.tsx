import React from "react";
import { useMoralis } from "react-moralis";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import HappyButton from "../components/HappyButton";
import HappyTextField from "../components/HappyTextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Service } from "../service/service";

function CreateLiderbord() {
  const navigate = useNavigate();
  // let { isAuthenticated, user, logout } = useMoralis();  will have to add back

  const goToMainPage = () => {
    // This will navigate to second component
    navigate("/");
  };
  const goCreatedLiderbordPage = (id: string) => {
    // This will navigate to the correct liderbord page
    navigate("/l/" + id);
  };

  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTag] = useState("");

  // Error flags
  const [topicError, setTopicError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [tagError, setTagError] = useState("");

  // Redirect to the login page if the user is not authenticated
  // if (!isAuthenticated) {
  //   return <Navigate replace to="/login" />;
  // }
  // removed because idk why it would never detect auth

  const submit = async () => {
    // check topic for errors
    if (topic === "") {
      setTopicError("Topic cannot be empty");
    }
    if (topic.length > 50) {
      setTopicError("Topic must be below 50 characters");
    }

    // check description for errors
    if (description.length < 10) {
      setDescriptionError("Description must be at least 10 characters");
    }

    // parse and check tags for errors
    let tagsArray: string[] = tags.split("#");
    tagsArray.forEach((element, index) => {
      tagsArray[index] = element.trim();
    });
    // remove the first argument which is always an empty string
    tagsArray.shift();
    if (tagsArray.includes("")) {
      setTagError("Tags cannot have an empty value");
    }
    if (tagsArray.length < 3) {
      setTagError("You must include at least 3 tags");
    }

    const params = { topic: topic, desc: description, tags: tagsArray };
    console.log(params);
    // if there are no errors proceed with the submission of the liderbord
    if (topicError + descriptionError + tagError === "") {
      const id: string = await Service.createLiderbord(
        topic,
        description,
        tagsArray
      );
      goCreatedLiderbordPage(id);
    }
  };

  return (
    <Container>
      <CssBaseline />
      <Box component="form" autoComplete="off">
        <Typography variant="h1" component="h1" sx={{ margin: "16px 0px" }}>
          New Liderbord
        </Typography>
        <Box sx={{ marginBottom: "27px" }}>
          <Typography variant="h2" component="h2" sx={{ margin: "16px 0px" }}>
            Topic
          </Typography>
          <Typography sx={{ margin: "16px 0px" }}>
            Enter your topic name here. If you are looking for something
            specific make sure to avoid general subjects.
          </Typography>
          <HappyTextField
            fullWidth
            label="Topic"
            onChange={(e: any) => setTopic(e.target.value)}
            error={topicError !== ""}
            helperText={topicError}
          />
        </Box>
        <Box sx={{ marginBottom: "27px" }}>
          <Typography variant="h2" component="h2" sx={{ margin: "16px 0px" }}>
            Description
          </Typography>
          <Typography sx={{ margin: "16px 0px" }}>
            Please describe in detail the topic so that readers can understand
            what ressources you are looking for here.
          </Typography>
          <HappyTextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            onChange={(e: any) => setDescription(e.target.value)}
            error={descriptionError !== ""}
            helperText={descriptionError}
          />
        </Box>
        <Box sx={{ marginBottom: "27px" }}>
          <Typography variant="h2" component="h2" sx={{ margin: "16px 0px" }}>
            Tags
          </Typography>
          <Typography sx={{ margin: "16px 0px" }}>
            Tags help users find your Liderbord, please include a minimum of 3
            tags. Tags must start with a hashtag.
          </Typography>
          <HappyTextField
            fullWidth
            label="Tags"
            onChange={(e: any) => setTag(e.target.value)}
            error={tagError !== ""}
            helperText={tagError}
          />
        </Box>

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
