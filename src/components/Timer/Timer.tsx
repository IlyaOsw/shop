import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Container, Paper, Typography } from "@mui/material";
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
    <Container maxWidth="xl">
      <Paper
        elevation={6}
        sx={{
          position: "relative",
          margin: "50px auto 50px auto",
          p: 1,
          width: "30vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
          }}
        >
          <AccessTimeIcon color="secondary" fontSize="large" />
          <Typography color="secondary" sx={{ ml: 1, fontSize: "18px" }}>
            {time.toLocaleTimeString()}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
