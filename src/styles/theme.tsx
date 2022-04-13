import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#384A6E",
    },
    secondary: {
      main: "#FF7900",
      contrastText: "#FFF",
    },
    background: {
      default: "#F9F9F9",
    },
  },
  typography: {
    fontFamily: "Open Sans",
    fontSize: 16,
    h1: {
      fontFamily: "Raleway",
      fontSize: 56,
      fontWeight: 800,
    },
    h2: {
      fontFamily: "Raleway",
      fontSize: 32,
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Raleway",
      fontSize: 24,
      fontWeight: 700,
    },
    h4: {
      fontSize: 16,
      fontWeight: 700,
    },
    button: {
      fontWeight: 600,
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 20,
    },
    body1: {
      fontSize: 16,
    },
  },
});
