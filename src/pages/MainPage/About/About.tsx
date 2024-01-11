import React from "react";
import { Box, Typography } from "@mui/material";
import AboutBlocks from "./AboutBlocks/AboutBlocks";
import { useTranslation } from "react-i18next";

const MainAbout: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ textAlign: "center", position: "relative" }}>
      <Typography variant="h4" sx={{ pt: "20px" }}>
        {t("about")}
      </Typography>
      <AboutBlocks />
    </Box>
  );
};

export default MainAbout;
