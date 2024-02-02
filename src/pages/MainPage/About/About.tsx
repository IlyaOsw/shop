import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import AboutBlocks from "./AboutBlocks/AboutBlocks";
import { useTranslation } from "react-i18next";

const MainAbout: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl" sx={{ textAlign: "center", position: "relative" }}>
      <Typography variant="h5" sx={{ mt: 5 }}>
        {t("about")}
      </Typography>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          mt: 5,
          position: "relative",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <AboutBlocks />
      </Paper>
    </Container>
  );
};

export default MainAbout;
