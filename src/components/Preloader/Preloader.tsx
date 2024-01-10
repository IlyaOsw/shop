import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

export default function Preloader() {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
    </Box>
  );
}
