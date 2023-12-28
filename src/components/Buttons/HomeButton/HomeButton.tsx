import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export default function HomeButton() {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton aria-label="homeicon" size="large">
        <Link to="/">
          <HomeIcon fontSize="large" color="action" />
        </Link>
      </IconButton>
    </Stack>
  );
}
