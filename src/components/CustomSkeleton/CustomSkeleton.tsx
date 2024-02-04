import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import React from "react";
import { Container } from "@mui/material";

export function CustomSkeleton() {
  const [loading] = React.useState(true);
  return (
    <Container maxWidth="xl">
      {loading && (
        <Skeleton width="100%">
          <Typography variant="h2" sx={{ m: 3 }}>
            .
          </Typography>
        </Skeleton>
      )}
      {loading && (
        <Skeleton variant="rectangular" width="100%" sx={{ mb: 10 }}>
          <div style={{ height: "300px" }} />
        </Skeleton>
      )}
      {loading && (
        <Skeleton variant="rectangular" width="100%" sx={{ mb: 10 }}>
          <div style={{ height: "300px" }} />
        </Skeleton>
      )}
      {loading && (
        <Skeleton variant="rectangular" width="100%" sx={{ mb: 10 }}>
          <div style={{ height: "200px" }} />
        </Skeleton>
      )}
    </Container>
  );
}
