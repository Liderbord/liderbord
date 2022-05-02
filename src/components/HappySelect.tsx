import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const HappySelect = styled(Select)({
  backgroundColor: "#fff",
  borderRadius: 8,
  boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.1)",
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: "#fff",
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 2,
    backgroundColor: "#000",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
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

export default HappySelect;
