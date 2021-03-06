import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Liderbord from "../model/liderbord";
import CardContainer from "../components/CardContainer";

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
    <CardContainer sx={{ width: 1000 }}>
      <CardContent>
        <Typography sx={{ mb: 1 }} variant="h2" component="div">
          {liderbord.topic?.toUpperCase()}
        </Typography>
        <div
          style={{
            height: "6px",
            background: "#384A6E",
            borderRadius: "6px",
            width: "50%",
            marginBottom: "5px",
          }}
        ></div>
        <Typography sx={{ display: "inline" }}>
          {liderbord.tags.map((item, i) => (
            <b key={i}> #{item} </b>
          ))}
          {separatorPoint} {liderbord.nbVotes + " Votes"} {separatorPoint}{" "}
          {liderbord.nbResources + " Resources"}
        </Typography>
        <Typography sx={{ mt: 1.5 }} variant="body1">
          {liderbord.description}
        </Typography>
      </CardContent>
    </CardContainer>
  );
}

export default LiderbordCard;
