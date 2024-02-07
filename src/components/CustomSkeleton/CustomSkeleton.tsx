import React from "react";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { Container } from "@mui/material";

export const CustomSkeleton: React.FC = () => {
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
};
