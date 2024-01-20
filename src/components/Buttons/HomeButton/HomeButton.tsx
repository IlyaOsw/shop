import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export default function HomeButton() {
  return (
    <IconButton aria-label="homeicon" size="large">
      <Link to="/">
        <HomeIcon fontSize="large" color="action" />
      </Link>
    </IconButton>
  );
}
