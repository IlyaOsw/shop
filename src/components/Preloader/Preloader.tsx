import { Box } from "@mui/material";
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

const Preloader: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
    </Box>
  );
};

export default Preloader;
