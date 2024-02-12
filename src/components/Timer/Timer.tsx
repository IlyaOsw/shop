import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const Timer: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "50px auto",
      }}
    >
      <AccessTimeIcon color="info" fontSize="large" />
      <Typography color="#0288d1" sx={{ mt: 0.5, ml: 1, fontSize: "18px" }}>
        {time.toLocaleTimeString()}
      </Typography>
    </Box>
  );
};
