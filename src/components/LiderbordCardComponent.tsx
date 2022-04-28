import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Liderbord from "../model/liderbord";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function LiderbordCard({ liderbord }: { liderbord: Liderbord }) {
  return (
    <React.Fragment>
      <Card
        variant="outlined"
        sx={{
          height: 150,
          width: 1000,
          borderRadius: "24px",
          pb: "24px",
          mt: "16px",
        }}
      >
        <CardContent>
          <Typography sx={{ mb: 1 }} variant="h2" component="div">
            {liderbord.topic.toUpperCase()}
          </Typography>
          <hr
            style={{
              width: "50%",
              border: "0.9px solid blue",
              margin: "7px",
            }}
          ></hr>
          <Typography sx={{ display: "inline" }} color="text.secondary">
            {liderbord.tags.map((item, i) => (
              <b key={i}> #{item} </b>
            ))}
            {bull} {liderbord.nbVotes} {bull} {liderbord.nbResources}
          </Typography>
          <Typography sx={{ mt: 1.5 }} variant="body2">
            {liderbord.description}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default LiderbordCard;
