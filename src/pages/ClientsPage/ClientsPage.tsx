import React from "react";
import Clients from "./Clients/Clients";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";

const ClientsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box>
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
          position: "relative",
          m: 2,
        }}
      >
        <Paper elevation={4}>
          <Typography variant="h5" textAlign={"center"} sx={{ m: 3 }}>
            {t("clientsSubTitle")}
          </Typography>
        </Paper>
      </Box>
      <Clients />
      <Box
        sx={{
          display: "flex",
          position: "relative",
          m: 2,
        }}
      >
        <Paper elevation={4}>
          <Typography variant="h5" textAlign={"center"} sx={{ m: 3 }}>
            {t("clientsDescription")}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default ClientsPage;
