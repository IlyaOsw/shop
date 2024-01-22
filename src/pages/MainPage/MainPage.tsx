import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Card from "./Card/Card";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import About from "./About/About";
import { useTranslation } from "react-i18next";
import Paper from "@mui/material/Paper";

const Main: React.FC = React.memo(() => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <Typography variant="h5" sx={{ m: 3, textAlign: "center" }}>
        {t("welcome")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Card />
      </Box>
      <Box>
        <Description />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
          position: "relative",
        }}
      >
        <Paper elevation={4}>
          <About />
        </Paper>
      </Box>
      <Feedback />
    </Container>
  );
});

export default Main;
