import React from "react";
import { Box, Container, Typography } from "@mui/material";
import AboutBlocks from "./AboutBlocks/AboutBlocks";
import { useTranslation } from "react-i18next";

const MainAbout: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl" sx={{ textAlign: "center", position: "relative" }}>
      <Typography variant="h5" sx={{ pt: "20px" }}>
        {t("about")}
      </Typography>
      <AboutBlocks />
    </Container>
  );
};

export default MainAbout;
