import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HappyTextField from "./HappyTextField";

const FormBlock = function ({
  title,
  description,
  textFieldLabel,
  multiline,
}: {
  title: string;
  description?: string;
  textFieldLabel?: string;
  multiline?: boolean;
}) {
  return (
    <Box sx={{ marginBottom: "27px" }}>
      <Typography variant="h2" component="h2" sx={{ margin: "16px 0px" }}>
        {title}
      </Typography>
      <Typography sx={{ margin: "16px 0px" }}>{description}</Typography>
      {multiline ? (
        <HappyTextField
          fullWidth
          multiline
          rows={4}
          label={textFieldLabel ?? ""}
        />
      ) : (
        <HappyTextField fullWidth label={textFieldLabel ?? ""} />
      )}
    </Box>
  );
};

export default FormBlock;
