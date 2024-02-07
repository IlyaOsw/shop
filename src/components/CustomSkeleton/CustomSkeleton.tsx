import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Box, Container } from "@mui/material";

export const CustomSkeleton: React.FC = () => {
  const [loading] = React.useState(true);
  return (
    <Container maxWidth="xl">
      {loading && (
        <Skeleton variant="rectangular" width="100%" sx={{ mb: 10 }}>
          <Box style={{ height: "40px", marginTop: "30px" }} />
        </Skeleton>
      )}
      {loading && (
        <Skeleton variant="rectangular" width="100%" sx={{ mb: 10 }}>
          <Box style={{ height: "100px" }} />
        </Skeleton>
      )}
      {loading && (
        <Skeleton variant="rectangular" width="100%" sx={{ mb: 10 }}>
          <Box style={{ height: "200px" }} />
        </Skeleton>
      )}
      {loading && (
        <Skeleton variant="rectangular" width="100%" sx={{ mb: 10 }}>
          <Box style={{ height: "300px" }} />
        </Skeleton>
      )}
    </Container>
  );
};
