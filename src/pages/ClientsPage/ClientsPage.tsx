import React from "react";
import Clients from "./Clients/Clients";
import { Box, Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
import Carousel from "./Carousel/Carousel";

const ClientsPage: React.FC = React.memo(() => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h4"
        textAlign={"center"}
        sx={{ m: 3, letterSpacing: "1px" }}
      >
        {t("clientsTitle")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "600px",
          }}
        >
          <Paper elevation={4}>
            <Typography variant="h5" sx={{ p: 1, m: 1 }}>
              {t("clientsSubTitle")}
            </Typography>
          </Paper>
          <Paper elevation={4}>
            <Typography variant="h5" sx={{ p: 1, m: 1 }}>
              {t("clientsSubTitle2")}
            </Typography>
          </Paper>
        </Box>
        <Carousel />
      </Box>
      <Clients />
    </Container>
  );
});

export default ClientsPage;
