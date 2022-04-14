import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const HappyTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    borderRadius: 8,
    position: "relative",
    backgroundColor: "#fff",
    width: "auto",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.1)",
      borderRadius: 8,
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderRadius: 8,
      borderColor: "#384A6E",
    },
    "&.Mui-focused fieldset": {
      borderRadius: 8,
      borderColor: "#384A6E",
    },
  },
});

export default HappyTextField;
