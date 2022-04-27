import {
  Box,
  Container,
  Grid,
  IconButton,
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

const VoteButton = styled(IconButton)({
  ".MuiTouchRipple": {
    backgroundColor: "red",
  },
});
export default function ResourceCard({
  rank,
  resource,
}: {
  rank: number;
  resource: Resource;
}) {
  const [happyVoteProps, setHappyVoteProps] = useState({
    size: 32,
    select: false,
  });
  const iconSize = 34;
  return (
    <CardContainer sx={{ minHeight: "96px" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack alignItems="center" direction="row" spacing={3}>
          <Typography variant="h2">{rank}</Typography>
          <ResourceTypeIcon type={resource.type} size={42} />
          <Typography variant="subtitle1">{resource.title}</Typography>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ marginRight: "24px" }}>
          <Box>
            <VoteButton size="small">
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
            <VoteButton size="small">
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
