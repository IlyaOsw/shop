import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box } from "@mui/material";

export default function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">
        <AccessTimeIcon />
        <Box sx={{ p: 2 }}>{time.toLocaleTimeString()}</Box>
      </Button>
    </Stack>
  );
}
