import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import HappyButton from "../components/HappyButton";
import ResourceCard from "../components/ResourceCard";
import Liderbord from "../model/liderbord";
import { useNavigate, useParams } from "react-router-dom";
import { Service } from "../service/service";
import CommentCard from "../components/CommentCard";
import Resource from "../model/resource";

export default function LiderbordPage() {
  const { id } = useParams();
  const [liderbord, setLiderbord] = useState<Liderbord>();
  const [commentResource, setCommentResource] = useState<Resource>();

  const navigate = useNavigate();
  const goToCreateResource = () => {
    if (id !== undefined) {
      navigate("/create-resource/" + id);
    } else {
      navigate("/");
    }
    // This will navigate to the correct liderbord page
  };
  useEffect(() => {
    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    if (!liderbord) {
      Service.getLiderbord(id ?? "")
        .then((lb) => {
          setLiderbord(lb);
          console.log(lb);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });
  const updateCommentSection = (resource: Resource): void => {
    if (resource.id === commentResource?.id) {
      setCommentResource(undefined);
      return;
    }
    setCommentResource(resource);
  };
  return (
    <Container>
      <NavigationBar />
      <CssBaseline />

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ margin: "7px 0px", marginTop: 15 }}
      >
        <Grid item>
          <Typography variant="h1" component="h1">
            {liderbord?.topic?.toUpperCase()}
          </Typography>
        </Grid>
        <Grid item>
          <HappyButton
            color="secondary"
            variant="contained"
            onClick={goToCreateResource}
          >
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
      <Grid container direction="row" spacing={4} sx={{ marginTop: "28px" }}>
        <Grid item xs={commentResource ? 8 : 12}>
          <Stack spacing={2}>
            {liderbord?.resources?.map((resource, index) => (
              <ResourceCard
                key={"ressource_" + index}
                rank={index + 1}
                resource={resource}
                liderbordID={id as string}
                commentUpdate={updateCommentSection}
                highlighted={resource.id === commentResource?.id}
              />
            ))}
          </Stack>
        </Grid>

        {commentResource !== undefined ? (
          <Grid item xs={4}>
            <Stack spacing={2}>
              <Typography sx={{ pd: 10 }} variant="h2">
                Comments
              </Typography>
              {commentResource?.comments.length > 0 ? (
                commentResource.comments.map((comment, index) => {
                  return (
                    <CommentCard
                      key={index}
                      comment={comment.comment}
                      vote={comment.vote}
                    />
                  );
                })
              ) : (
                <Typography>No comments for this resource {":("}</Typography>
              )}
            </Stack>
          </Grid>
        ) : (
          <Box></Box>
        )}
      </Grid>
    </Container>
  );
}
