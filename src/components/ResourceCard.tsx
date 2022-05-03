import { Box, Grid, IconButton, Link, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import Resource from "../model/resource";
import CardContainer from "./CardContainer";
import { ReactComponent as HappyIcon } from "../res/icons/vote/upvote_icon.svg";
import { ReactComponent as SadIcon } from "../res/icons/vote/downvote_icon.svg";
import ResourceTypeIcon from "./icons/ResourceTypeIcon";
import UserVote from "../model/userVote";
import { Service } from "../service/service";
import { useNavigate } from "react-router-dom";

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
  liderbordID,
}: {
  rank: number;
  resource: Resource;
  liderbordID: string;
}) {
  const navigate = useNavigate();
  const returnToLiderbord = () => {
    // This will navigate to second component
    navigate("/l/" + liderbordID);
  };

  function updateUserVote(newVote: UserVote) {
    Service.vote(newVote, resource.id);
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
              disableRipple={true}
              size="small"
              onClick={() => {
                updateUserVote(UserVote.Happy);
              }}
            >
              <HappyIcon width={iconSize} height={iconSize} />
            </VoteButton>
            {resource?.userVote === UserVote.Happy ? (
              <Typography variant="body2" align="center">
                {resource.upVotes}
              </Typography>
            ) : (
              <Typography align="center">{resource.upVotes}</Typography>
            )}
          </Box>
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
            {resource?.userVote === UserVote.Sad ? (
              <Typography variant="body2" align="center">
                {resource.downVotes}
              </Typography>
            ) : (
              <Typography align="center">{resource.downVotes}</Typography>
            )}
          </Box>
        </Stack>
      </Grid>
    </CardContainer>
  );
}
