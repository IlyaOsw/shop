import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Main.module.scss";
import MainCard from "./MainCard/MainCard";
import MainChoose from "./MainChoose/MainChoose";
import MainFeedback from "./MainFeedback/MainFeedback";

const Main: React.FC = () => {
  return (
    <Box>
      <Box className={styles.blockImages}>
        <MainCard />
      </Box>
      <Box className={styles.blockWhy}>
        <MainChoose />
      </Box>
      <MainFeedback />
    </Box>
  );
};

export default Main;
