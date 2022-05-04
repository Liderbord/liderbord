import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useNavigate, useParams } from "react-router-dom";
import HappyTextField from "../components/HappyTextField";
import HappyButton from "../components/HappyButton";
import NavigationBar from "../components/NavigationBar";
import {
  Container,
  CssBaseline,
  Grid,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import ResourceType, { stringToResourceType } from "../model/resourceType";
import HappySelect from "../components/HappySelect";
import ResourceTypeIcon from "../components/icons/ResourceTypeIcon";
import Resource from "../model/resource";
import { Service } from "../service/service";

function CreateResource() {
  const navigate = useNavigate();
  const { liderbordID } = useParams();
  const returnToLiderbord = () => {
    // This will navigate to second component
    navigate("/l/" + liderbordID);
  };
  const [resourceName, setResourceName] = useState("");
  const [resourceType, setResourceType] = useState("");
  const [resourceURL, setURL] = useState("");
  const [ressourceMarkdown, setRessourceMarkdown] = useState("");
  const [ressourceAttachement, setRessourceAttachement] = useState("link");

  const [resourceNameError, setResourceNameError] = useState("");
  const [URLError, setURLError] = useState("");
  const [markdownError, setMarkdownError] = useState("");
  const [resourceTypeError, setResourceTypeError] = useState("");

  const onResourceTypeChange = (event: SelectChangeEvent<unknown>) => {
    setResourceType(event.target.value as string);
  };
  const switchAttachementType = () => {
    if (ressourceAttachement === "link") setRessourceAttachement("markdown");
    if (ressourceAttachement === "markdown") setRessourceAttachement("link");
  };

  const displayErrors = (): boolean => {
    let error = false;
    if (resourceName === "") {
      setResourceNameError("Resource Name cannot be empty");
      error = true;
    } else {
      setResourceNameError("");
    }
    if (ressourceAttachement === "link" && resourceURL === "") {
      setURLError("URL cannot be empty");
      error = true;
    } else {
      setURLError("");
    }
    if (ressourceAttachement === "markdown" && ressourceMarkdown === "") {
      setMarkdownError("Markdown ressource cannot be empty");
      error = true;
    } else {
      setMarkdownError("");
    }
    if (ressourceAttachement === "link" && resourceType === "") {
      setResourceTypeError("URL cannot be empty");
      error = true;
    } else {
      setResourceTypeError("");
    }
    return error;
  };

  const submit = async () => {
    if (
      URLError + resourceNameError + resourceTypeError + markdownError ===
      ""
    ) {
      const type: string =
        ressourceAttachement === "markdown"
          ? ResourceType.Document
          : resourceType;
      // send the data
      const resource: Resource = {
        id: "",
        title: resourceName,
        link: resourceURL || ressourceMarkdown,
        type: stringToResourceType(type),
        score: 0,
        hash: "",
        upVotes: 0,
        downVotes: 0,
      };
      await Service.addResource(resource, liderbordID as string);
      returnToLiderbord();
    }
  };

  const menuItem = (resourceType: ResourceType) => {
    return (
      <MenuItem value={resourceType}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <ResourceTypeIcon type={resourceType} />
          <Typography>{resourceType}</Typography>
        </Stack>
      </MenuItem>
    );
  };
  return (
    <Container>
      <NavigationBar />
      <CssBaseline />
      <Box component="form" autoComplete="off">
        <Typography
          variant="h1"
          component="h1"
          sx={{ margin: "16px 0px", marginTop: 15 }}
        >
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
          <Typography variant="h2" component="h2" sx={{ margin: "16px 0px" }}>
            Resource Type
          </Typography>
          <Typography sx={{ margin: "16px 0px" }}>
            Resources can either be links to another web page, or a markdown
            document you write yourself.
          </Typography>

          <ToggleButtonGroup
            color="primary"
            value={ressourceAttachement}
            exclusive
            onChange={switchAttachementType}
          >
            <ToggleButton value="link">Link</ToggleButton>
            <ToggleButton value="markdown">Markdown</ToggleButton>
          </ToggleButtonGroup>

          <InputLabel sx={{ margin: "16px 0px" }} id="resource-type">
            Resource Type
          </InputLabel>
        </Box>
        {ressourceAttachement === "link" && (
          <div>
            <HappySelect
              fullWidth
              value={resourceType}
              label="Choose a resource type"
              onChange={onResourceTypeChange}
              error={resourceTypeError !== ""}
            >
              {menuItem(ResourceType.Link)}
              {menuItem(ResourceType.Audio)}
              {menuItem(ResourceType.Document)}
              {menuItem(ResourceType.Image)}
              {menuItem(ResourceType.Video)}
            </HappySelect>
            <Box sx={{ marginBottom: "27px" }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{ margin: "16px 0px" }}
              >
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
          </div>
        )}
        {ressourceAttachement === "markdown" && (
          <Box sx={{ marginBottom: "27px" }}>
            <Typography variant="h2" component="h2" sx={{ margin: "16px 0px" }}>
              Resource
            </Typography>
            <Typography sx={{ margin: "16px 0px" }}>
              Pleaser enter your ressource, you can use the Markdown Syntax
            </Typography>
            <HappyTextField
              fullWidth
              multiline
              rows={10}
              onChange={(e: any) => setRessourceMarkdown(e.target.value)}
              error={markdownError !== ""}
              helperText={markdownError}
            />
          </Box>
        )}
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <HappyButton
            onClick={returnToLiderbord}
            variant="contained"
            sx={{ marginRight: "24px" }}
          >
            Cancel
          </HappyButton>
          <HappyButton
            color="secondary"
            variant="contained"
            onClick={() => {
              const isError = displayErrors();
              if (!isError) {
                submit();
              }
            }}
          >
            Submit
          </HappyButton>
        </Grid>
      </Box>
    </Container>
  );
}

export default CreateResource;
