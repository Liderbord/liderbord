import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const FilterItem = styled(Paper)(({ theme }) => ({
  backgroundColor: "#C6C6C6",
  ...theme.typography.body2,
  borderRadius: "15px",
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: "white",
}));

export default FilterItem;
