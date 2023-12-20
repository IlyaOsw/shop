import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import HelpIcon from "@mui/icons-material/Help";

export default function HelpButton() {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton aria-label="homeicon" size="large">
        <HelpIcon fontSize="large" color="action" />
      </IconButton>
    </Stack>
  );
}
