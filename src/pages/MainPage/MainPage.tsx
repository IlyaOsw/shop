import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Main.module.scss";
import MainCard from "./MainCard/MainCard";
import MainChoose from "./MainChoose/MainChoose";
import MainFeedback from "./MainFeedback/MainFeedback";
import MainAbout from "./MainAbout/MainAbout";
import { useTranslation } from "react-i18next";

const Main: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography variant="h4" className={styles.title}>
        {t("welcome")}
      </Typography>
      <Box className={styles.blockImages}>
        <MainCard />
      </Box>
      <Box className={styles.blockWhy}>
        <MainChoose />
      </Box>
      <MainAbout />
      <MainFeedback />
    </Box>
  );
};

export default Main;
