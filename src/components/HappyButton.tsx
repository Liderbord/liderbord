import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const HappyButton = styled(Button)({
    boxShadow: '0px 0px 10px 1px',
    textTransform: 'none',
    fontSize: 20,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    borderRadius: '10px',
    fontFamily: [
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#FF7800',
    },
    '&:active': {
      backgroundColor: '#FF6700',
    },
    palette: {
        primary: {
          main: '#FF7900',
        },
        secondary: {
          main: '#E3E3E3',
          contrastText: '#fff',
        },
      },
});

export default HappyButton;