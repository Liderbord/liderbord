import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// const HappyButton = styled(Button)({
//   boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.1)",
//   textTransform: "none",
//   padding: "12px 24px",
//   height: "49px",
//   borderRadius: "8px",
// });
const HappyButton = styled(Button)(
  {
    disableRipple: true,
    "&.MuiButtonBase-root:hover": {
      bgcolor: "transparent",
    },
  },
  `
  height: 49px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  text-transform: "none";
  padding: "12px 24px";
  :hover {
    animation: bounce 0.2s;
    transform: scale(1.1);
  }
  :active {
    transition: 0.1s;
    transform: scale(0.9);
  }
  @keyframes bounce {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    40% {
      transform: scale(1.1);
      opacity: 1;
    }
    100% {
      transform: scale(1.05);
    }
  }
`
);

export default HappyButton;
