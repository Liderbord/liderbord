import HappyTextField from "../components/HappyTextField";
import { useState } from "react";
import { Container, Grid } from "@mui/material";
import HappyButton from "../components/HappyButton";
import NavigationBar from "../components/NavigationBar";
import liderbordLogo from "../res/icons/resourceTypes/liderbordLogo.svg";
import { useNavigate } from "react-router-dom";
import { authentication } from "../service/firebaseConfig";

function HomePage() {
  const [liderbordName, setLiderbordName] = useState("");
  const navigate = useNavigate();
  console.log(authentication.currentUser);
  const keyPress = async (e: any) => {
    if (e.keyCode === 13) {
      inputHandler();
    }
  };

  const goToCreateLiderbord = () => {
    // This will navigate to second component
    navigate("/create-liderbord");
  };

  const goToSearchLiderbord = () => {
    navigate("/search/" + liderbordName);
  };

  const inputHandler = async () => {
    console.log(liderbordName);
    goToSearchLiderbord();
  };

  return (
    <Container>
      <NavigationBar />
      <div
        className="App"
        style={{
          margin: "120px 0px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={liderbordLogo} alt="Liderbord Logo" />
      </div>

      <HappyTextField
        fullWidth
        label="Enter a topic"
        onChange={(e: any) => setLiderbordName(e.target.value)}
        onKeyDown={keyPress}
      />

      <Grid
        container
        justifyContent="center"
        columns={10}
        spacing={4}
        sx={{ mt: "10px" }}
      >
        <Grid item>
          <HappyButton
            color="secondary"
            variant="contained"
            onClick={inputHandler}
          >
            Search Liderbords
          </HappyButton>
        </Grid>

        <Grid item>
          <HappyButton
            color="info"
            variant="contained"
            onClick={goToCreateLiderbord}
          >
            + Create a Liderbord
          </HappyButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
