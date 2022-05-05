import Stack from "@mui/material/Stack";
import UserVote from "../model/userVote";
import CardContainer from "./CardContainer";
import { ReactComponent as HappyIcon } from "../res/icons/vote/upvote_icon.svg";
import { ReactComponent as SadIcon } from "../res/icons/vote/downvote_icon.svg";
import { Typography } from "@mui/material";

export default function CommentCard({
  comment,
  vote,
}: {
  comment: string;
  vote: UserVote;
}) {
  return (
    <CardContainer>
      <Stack direction="row" spacing={2}>
        {vote === UserVote.Happy ? <HappyIcon /> : <SadIcon />}
        <Typography>{comment}</Typography>
      </Stack>
    </CardContainer>
  );
}
