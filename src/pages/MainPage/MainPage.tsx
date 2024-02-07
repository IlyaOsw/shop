import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Divider, Typography } from "@mui/material";
import { MainCard } from "./MainCard/MainCard";
import { Description } from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import About from "./About/About";
import { Logos } from "./Logos/Logos";

const MainPage: React.FC = React.memo(() => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <Typography variant="h5" sx={{ m: 3, textAlign: "center" }}>
        {t("welcome")}
      </Typography>
      <Divider sx={{ m: 2 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <MainCard />
      </Box>
      <Description />
      <Logos />
      <About />
      <Feedback />
    </Container>
  );
});

export default MainPage;
