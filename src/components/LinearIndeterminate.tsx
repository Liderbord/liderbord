import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearIndeterminate() {
  return (
    <Box
      sx={{ width: "100%" }}
      style={{ width: "100%", position: "absolute", top: "0", left: "0" }}
    >
      <LinearProgress color="primary" />
    </Box>
  );
}
