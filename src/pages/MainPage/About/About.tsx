import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Paper, Typography } from "@mui/material";
import { AboutBlocks, AboutInfo, AboutTitle } from "./AboutBlocks/AboutBlocks";

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
        <AboutBlocks
          item={{
            id: 0,
            label: AboutTitle.TITLE1,
            description: AboutInfo.INFO1,
          }}
        />
      </Paper>
    </Container>
  );
};

export default MainAbout;
