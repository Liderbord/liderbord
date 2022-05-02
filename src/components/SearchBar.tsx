import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";



const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "3px 4px",
        display: "flex",
        alignItems: "center",
        margin: "auto",
        width: "1100px",
        height: "50px",
        borderRadius: "15px",
        
      }}
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Enter a topic"
        inputProps={{ "aria-label": "search google maps" }}
      />
     
    </Paper>
  );
}

export default SearchBar;
