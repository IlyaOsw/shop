import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";

export default function LoginButton() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="end" spacing={1}>
      <IconButton aria-label="homeicon" size="large">
        <PersonIcon fontSize="large" color="action" />
      </IconButton>
    </Stack>
  );
}
