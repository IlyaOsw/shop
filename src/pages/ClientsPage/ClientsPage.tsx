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
          justifyContent: "space-between",
          border: "1px solid black",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "300px",
          }}
        >
          <Paper elevation={4}>
            <Typography variant="h5" textAlign={"center"} sx={{ p: 3 }}>
              {t("clientsSubTitle")}
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
