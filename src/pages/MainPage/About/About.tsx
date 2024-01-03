import React from "react";
import styles from "./About.module.scss";
import { Box, Typography } from "@mui/material";
import AboutBlocks from "./AboutBlocks/AboutBlocks";
import { useTranslation } from "react-i18next";

const MainAbout: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box className={styles.about}>
      <Typography variant="h4" className={styles.whyTitle}>
        {t("about")}
      </Typography>
      <AboutBlocks />
    </Box>
  );
};

export default MainAbout;
