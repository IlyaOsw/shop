import React from "react";
import Clients from "./Clients/Clients";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
import Carousel from "./Carousel/Carousel";

const ClientsPage: React.FC = React.memo(() => {
  const { t } = useTranslation();
  return (
    <>
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
            width: "55vh",
          }}
        >
          <Paper elevation={4}>
            <Typography variant="h5" textAlign={"center"} sx={{ p: 2 }}>
              {t("clientsSubTitle")}
            </Typography>
          </Paper>
          <Paper elevation={4}>
            <Typography variant="h5" textAlign={"center"} sx={{ p: 2, m: 2 }}>
              {t("clientsSubTitle2")}
            </Typography>
          </Paper>
        </Box>
        <Carousel />
      </Box>
      <Clients />
    </>
  );
});

export default ClientsPage;
