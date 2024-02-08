import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Divider, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

import { Timer } from "../../components/Timer/Timer";

import { Clients } from "./Clients/Clients";
import { Carousel } from "./Carousel/Carousel";

const ClientsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h5"
        textAlign={"center"}
        sx={{ m: 3, letterSpacing: "1px" }}
      >
        {t("clientsTitle")}
      </Typography>
      <Divider sx={{ m: 2 }} />
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
            maxWidth: "500px",
          }}
        >
          <Paper elevation={4}>
            <Typography variant="body1" color="text.secondary" sx={{ p: 1 }}>
              {t("clientsSubTitle")}
            </Typography>
          </Paper>
          <Paper elevation={4}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ p: 1, mt: 5 }}
            >
              {t("clientsSubTitle2")}
            </Typography>
          </Paper>
          <Paper elevation={4}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ p: 1, mt: 5 }}
            >
              {t("clientsSubTitle3")}
            </Typography>
          </Paper>
        </Box>
        <Carousel />
      </Box>
      <Timer />
      <Box sx={{ marginBottom: "50px" }}>
        <Clients />
      </Box>
    </Container>
  );
};

export default ClientsPage;
