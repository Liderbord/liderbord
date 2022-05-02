import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import MenuTypeResource from "../components/menuTypeResource";
import HappyTextField from "../components/HappyTextField";
import HappyButton from "../components/HappyButton";
import { Container, CssBaseline, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import ResourceType from "../model/resourceType";
import HappySelect from "../components/HappySelect";

function CreateResource() {
  const navigate = useNavigate();

  const goToMainPage = () => {
    // This will navigate to second component
    navigate("/MainPage");
  };

  const [resourceName, setResourceName] = useState("");
  const [resourceType, setResourceType] = useState(undefined);
  const [resourceURL, setURL] = useState("");

  const [resourceNameError, setresourceNameError] = useState("");
  const [URLError, setURLError] = useState("");

  const submit = async () => {};

  return (
    <Container>
      <CssBaseline />
      <Box component="form" autoComplete="off">
        <Typography variant="h1" component="h1" sx={{ margin: "16px 0px" }}>
          New Resource
        </Typography>
        <Box sx={{ marginBottom: "27px" }}>
          <Typography variant="h2" component="h2" sx={{ margin: "16px 0px" }}>
            Resource Name
          </Typography>
          <Typography sx={{ margin: "16px 0px" }}>
            Give a name to your ressource
          </Typography>
          <HappyTextField
            fullWidth
            label="Resource Name"
            onChange={(e: any) => setResourceName(e.target.value)}
            error={resourceNameError !== ""}
            helperText={resourceNameError}
          />
        </Box>
        <Box sx={{ marginBottom: "27px" }}>
          <FormControl fullWidth>
            <InputLabel id="resource-type">Resource Type</InputLabel>
            <HappySelect
              labelId="resource-type"
              id="resource-type-select"
              value={resourceType}
              label="Choose your resourceType"
              //onChange={handleChange}
            >
              <MenuItem value={ResourceType.Audio}>Audio</MenuItem>
              <MenuItem value={ResourceType.Document}>Document</MenuItem>
              <MenuItem value={ResourceType.Image}>Image</MenuItem>
              <MenuItem value={ResourceType.Link}>Link</MenuItem>
              <MenuItem value={ResourceType.Video}>Video</MenuItem>
            </HappySelect>
          </FormControl>
        </Box>
        <Box sx={{ marginBottom: "27px" }}>
          <Typography variant="h2" component="h2" sx={{ margin: "16px 0px" }}>
            Resource URL
          </Typography>
          <HappyTextField
            fullWidth
            label="URL"
            onChange={(e: any) => setURL(e.target.value)}
            error={URLError !== ""}
            helperText={URLError}
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

export default CreateResource;

