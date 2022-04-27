import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import Resource from "../model/resource";
import CardContainer from "./CardContainer";
import { ReactComponent as HappyIcon } from "../res/icons/vote/upvote_icon.svg";
import { ReactComponent as SadIcon } from "../res/icons/vote/downvote_icon.svg";
import ResourceTypeIcon from "./icons/ResourceTypeIcon";
import { useState } from "react";
import UserVote from "../model/userVote";

const VoteButton = styled(IconButton)`
  :hover {
    animation: bounce 0.2s;
    filter: drop-shadow(0px 1px 9px rgba(0, 0, 0, 0.3));
    transform: scale(1.1);
  }
  :active {
    transition: 0.1s;
    transform: scale(0.8);
  }
  @keyframes bounce {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    40% {
      transform: scale(1.2);
      opacity: 1;
      filter: drop-shadow(0px 1px 9px rgba(0, 0, 0, 0.4));
    }
    100% {
      transform: scale(1.1);
      filter: drop-shadow(0px 1px 9px rgba(0, 0, 0, 0.3));
    }
  }
`;

const BoldLink = styled(Link)`
  font-size: 20px;
  line-height: 25px;
  font-weight: 500;
  color: #000;
  :hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.02);
  }
`;

export default function ResourceCard({
  rank,
  resource,
}: {
  rank: number;
  resource: Resource;
}) {
  function updateUserVote(newVote: UserVote) {
    const userVote: UserVote | undefined =
      resource?.userVote === newVote ? undefined : newVote;

    // Upvotes logic
    let newUpvote = resource.upVotes;
    if (resource?.userVote === UserVote.Happy) {
      // If the user already voted happy and they are voting again, we are removing
      // their vote from the happy, so upvotes loses one.
      newUpvote--;
    } else if (newVote === UserVote.Happy) {
      // Else if the current vote was either sad or undefined, and the user just clicked on happy
      // then upvotes go up
      newUpvote++;
    }
    // if the user did not vote happy and his current vote was not happy upvotes remain the same

    // Downvotes logic
    let newDownvotes = resource.upVotes;
    if (resource?.userVote === UserVote.Sad) {
      // If the user already voted happy and they are voting again, we are removing
      // their vote from the happy, so upvotes loses one.
      newDownvotes--;
    } else if (newVote === UserVote.Sad) {
      // Else if the current vote was either sad or undefined, and the user just clicked on happy
      // then upvotes go up
      newDownvotes++;
    }
    // if the user did not vote happy and his current vote was not happy upvotes remain the same

    const updatedResource: Resource = {
      id: resource.id,
      title: resource.title,
      link: resource.link,
      score: newUpvote - newDownvotes,
      hash: resource.hash,
      upVotes: newUpvote,
      downVotes: newDownvotes,
      userVote: userVote,
    };

    // send the new resource to the backend and reload the whole page i cannot be bothered to figure something else
  }
  const iconSize = 34;
  return (
    <CardContainer sx={{ minHeight: "96px" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <BoldLink underline="none" href={resource.link}>
          <Stack alignItems="center" direction="row" spacing={3}>
            <Typography variant="h2">{rank}</Typography>
            <ResourceTypeIcon type={resource.type} size={42} />
            <div>{resource.title}</div>
          </Stack>
        </BoldLink>
        <Stack direction="row" spacing={2} sx={{ marginRight: "24px" }}>
          <Box>
            <VoteButton
              size="small"
              disableRipple={true}
              onClick={() => {
                updateUserVote(UserVote.Sad);
              }}
            >
              <SadIcon width={iconSize} height={iconSize} />
            </VoteButton>
            {resource?.userVote == UserVote.Sad ? (
              <Typography variant="body2" align="center">
                {resource.downVotes}
              </Typography>
            ) : (
              <Typography align="center">{resource.downVotes}</Typography>
            )}
          </Box>
          <Box>
            <VoteButton
              disableRipple={true}
              size="small"
              onClick={() => {
                updateUserVote(UserVote.Happy);
              }}
            >
              <HappyIcon width={iconSize} height={iconSize} />
            </VoteButton>
            {resource?.userVote == UserVote.Happy ? (
              <Typography variant="body2" align="center">
                {resource.upVotes}
              </Typography>
            ) : (
              <Typography align="center">{resource.upVotes}</Typography>
            )}
          </Box>
        </Stack>
      </Grid>
    </CardContainer>
  );
}
