import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Divider, Typography } from "@mui/material";

import { Timer } from "../../components/Timer/Timer";

import { Clients } from "./Clients/Clients";
import { Carousel } from "./Carousel/Carousel";

const ClientsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <Typography variant="h5" textAlign={"center"} sx={{ m: 3 }}>
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
            maxWidth: "500px",
          }}
        >
          <Typography variant="body1" sx={{ p: 1 }}>
            {t("clientsSubTitle")}
          </Typography>

          <Typography variant="body1" sx={{ p: 1, mt: 5 }}>
            {t("clientsSubTitle2")}
          </Typography>

          <Typography variant="body1" sx={{ p: 1, mt: 5 }}>
            {t("clientsSubTitle3")}
          </Typography>
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
