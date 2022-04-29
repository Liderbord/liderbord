import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Liderbord from "../model/liderbord";

const separatorPoint = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function LiderbordCard({ liderbord }: { liderbord: Liderbord }) {
  return (
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
          <div
            style={{
              height: '6px',
              background: '#384A6E',
              borderRadius: '6px',
              width: '50%',
            }}
          ></div>
          <Typography sx={{ display: "inline" }}>
            {liderbord.tags.map((item, i) => (
              <b key={i}> #{item} </b>
            ))}
            {separatorPoint} {liderbord.nbVotes + " Votes"} {separatorPoint} {liderbord.nbResources + " Resources"}
          </Typography>
          <Typography sx={{ mt: 1.5 }} variant="body1">
            {liderbord.description}
          </Typography>
        </CardContent>
      </Card>
  );
}

export default LiderbordCard;
