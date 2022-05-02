import {
  Box,
  Container,
  CssBaseline,
  Grid,
  listItemSecondaryActionClasses,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import HappyButton from "../components/HappyButton";
import ResourceCard from "../components/ResourceCard";
import Liderbord from "../model/liderbord";
import Resource from "../model/resource";
import ResourceType from "../model/resourceType";
import UserVote from "../model/userVote";
import { useParams } from "react-router-dom";
import { Service } from "../service/service";

export default function LiderbordPage() {
  const { id } = useParams();
  const [liderbord, setLiderbord] = useState<Liderbord>();

  useEffect(() => {
    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    if (!liderbord) {
      Service.getLiderbord(id ?? "").then(lb => {
        setLiderbord(lb);
        console.log(lb);
      }).catch(err => {
        console.error(err);
      })
    }
  }, []);
  // fake data
  const res1: Resource = {
    id: "1212",
    title: "Apprenez à programmer en C++",
    link: "https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1VDKB_frFR934FR934&oq=google&aqs=chrome.1.69i60j46i131i199i433i465i512j0i131i433i512l2j69i60l3j69i65.1909j0j7&sourceid=chrome&ie=UTF-8",
    score: 0,
    type: ResourceType.Document,
    hash: "hashahshash",
    upVotes: 317,
    downVotes: 22,
    userVote: UserVote.Happy,
  };
  const res2: Resource = {
    id: "1212",
    title: "Apprenez à programmer en C++",
    link: "https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1VDKB_frFR934FR934&oq=google&aqs=chrome.1.69i60j46i131i199i433i465i512j0i131i433i512l2j69i60l3j69i65.1909j0j7&sourceid=chrome&ie=UTF-8",
    score: 0,
    type: ResourceType.Image,
    hash: "hashahshash",
    upVotes: 24,
    downVotes: 5,
    userVote: UserVote.Sad,
  };
  const res3: Resource = {
    id: "1212",
    title: "Apprenez à programmer en C++",
    link: "https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1VDKB_frFR934FR934&oq=google&aqs=chrome.1.69i60j46i131i199i433i465i512j0i131i433i512l2j69i60l3j69i65.1909j0j7&sourceid=chrome&ie=UTF-8",
    score: 0,
    type: ResourceType.Video,
    hash: "hashahshash",
    upVotes: 20,
    downVotes: 12,
  };
  const res4: Resource = {
    id: "1212",
    title: "Apprenez à programmer en C++",
    link: "https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1VDKB_frFR934FR934&oq=google&aqs=chrome.1.69i60j46i131i199i433i465i512j0i131i433i512l2j69i60l3j69i65.1909j0j7&sourceid=chrome&ie=UTF-8",
    score: 0,
    hash: "hashahshash",
    upVotes: 20,
    downVotes: 12,
  };
  /**const defaultBord: Liderbord = {
    id: dbBord?.id ?? "",
    topic: dbBord?.topic ?? "Topic",
    description: dbBord?.description ?? "Description of the Liderbord",
    tags: dbBord?.tags ?? ["tag1", "tag2", "tag3"],
    resources: [res1, res2, res3, res4],
  };*/

  return (
    <Container>
      <CssBaseline />

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ margin: "7px 0px" }}
      >
        <Grid item>
          <Typography variant="h1" component="h1">
            {liderbord?.topic?.toUpperCase()}
          </Typography>
        </Grid>
        <Grid item>
          <HappyButton color="secondary" variant="contained">
            Add Resource
          </HappyButton>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {liderbord?.tags?.map((value: string, index: number) => {
          return (
            <Grid key={value + index} item>
              <Typography variant="h2" component="h2">
                {"#" + value + ""}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
      <Typography sx={{ margin: "7px 0px" }}>
        {liderbord?.description}
      </Typography>
      <Stack spacing={2} sx={{ marginTop: "28px" }}>
        {liderbord?.resources?.map((resource, index) => (
          <ResourceCard
            key={"ressource_" + index}
            rank={index + 1}
            resource={resource}
          />
        ))}
      </Stack>
    </Container>
  );
}
function value(value: any): React.ReactNode {
  throw new Error("Function not implemented.");
}
