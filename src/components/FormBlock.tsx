import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HappyTextField from "./HappyTextField";

const FormBlock = function ({
  title,
  description,
  textFieldLabel,
}: {
  title: string;
  description?: string;
  textFieldLabel?: string;
}) {
  return (
    <Box>
      <Typography variant="h2" component="h2" sx={{ margin: "16px 0px" }}>
        {title}
      </Typography>
      <Typography sx={{ margin: "16px 0px" }}>{description}</Typography>
      <HappyTextField fullWidth label={textFieldLabel ?? ""}></HappyTextField>
    </Box>
  );
};

export default FormBlock;
