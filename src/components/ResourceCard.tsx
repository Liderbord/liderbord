import {
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import Resource from "../model/resource";
import CardContainer from "./CardContainer";
import { ReactComponent as HappyIcon } from "../res/icons/vote/upvote_icon.svg";
import { ReactComponent as SadIcon } from "../res/icons/vote/downvote_icon.svg";
import { ReactComponent as CommentsIcon } from "../res/icons/comments.svg";
import ResourceTypeIcon from "./icons/ResourceTypeIcon";
import UserVote from "../model/userVote";
import VoteDialog from "./VoteDialog";
import HappyTextField from "./HappyTextField";
import HappyButton from "./HappyButton";
import { Service } from "../service/service";
import { useState } from "react";

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
  /*const navigate = useNavigate();
  const returnToLiderbord = () => {
    // This will navigate to second component
    navigate("/l/" + liderbordID);
  };*/

  // dialog variables
  const [open, setOpen] = useState(false);
  const [userVote, setUserVote] = useState(UserVote.Happy);
  const [comment, setComment] = useState(undefined);

  const handleClickOpen = () => {
    setOpen(true);
  };

  async function updateUserVote(newVote: UserVote) {
    handleClose();
    await Service.vote(newVote, resource.id, comment);
    setComment(undefined);
    window.location.reload();
  }

  const iconSize = 34;
  return (
    <CardContainer sx={{ minHeight: "96px" }}>
      <VoteDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent sx={{ padding: "32px" }}>
          <Typography variant="h2" sx={{ marginBottom: "16px" }}>
            {"Confirm you " +
              (userVote === UserVote.Sad ? "dis" : "") +
              "like this resource?"}
          </Typography>
          <Typography variant="h3">Add a comment</Typography>
          <HappyTextField
            onChange={(e: any) => setComment(e.target.value)}
            fullWidth
            multiline
            rows={2}
            label="Commments"
          />
        </DialogContent>
        <DialogActions>
          <HappyButton color="info" onClick={handleClose}>
            Cancel
          </HappyButton>
          <HappyButton
            color="primary"
            onClick={() => {
              updateUserVote(userVote);
            }}
            autoFocus
          >
            Agree (1 HC)
          </HappyButton>
        </DialogActions>
      </VoteDialog>
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
                setUserVote(UserVote.Happy);
                handleClickOpen();
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
                setUserVote(UserVote.Sad);
                handleClickOpen();
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
          <Box>
            <VoteButton disableRipple={true} size="small" onClick={() => {}}>
              <CommentsIcon width={iconSize} height={iconSize} />
            </VoteButton>
            <Typography align="center">{resource.comments.length}</Typography>
          </Box>
        </Stack>
      </Grid>
    </CardContainer>
  );
}
