import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Main.module.scss";
import Card from "./Card/Card";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import About from "./About/About";
import { useTranslation } from "react-i18next";
import Paper from "@mui/material/Paper";

const Main: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h4" className={styles.title}>
        {t("welcome")}
      </Typography>
      <Box className={styles.images}>
        <Card />
      </Box>
      <Box className={styles.description}>
        <Description />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 3,
          mb: 3,
          position: "relative",
        }}
      >
        <Paper elevation={4}>
          <About />
        </Paper>
      </Box>
      <Feedback />
    </>
  );
};

export default Main;
