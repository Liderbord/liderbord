import React from "react";
import { useMoralis } from "react-moralis";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function CreateLiderbord() {

    const navigate = useNavigate();

    const goToMainPage = () => {
        // This will navigate to second component
        navigate("/MainPage");
      };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
        <div>NEW LIDERBORD</div>
      <div>
        <TextField id="outlined" label="Topic" />
      </div>
      <div>
        <TextField id="outlined" label="Description" />
      </div>
      <div>
        <TextField id="outlined" label="Tags" />
      </div>
      <div>
        <Button onClick={goToMainPage} variant="contained">Cancel</Button>{" "}
        <Button variant="contained">Submit</Button>{" "}
      </div>
    </Box>
  );
}

export default CreateLiderbord;
