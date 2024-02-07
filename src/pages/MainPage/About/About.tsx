import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Paper, Typography } from "@mui/material";
import { AboutBlocks, AboutInfo, AboutTitle } from "./AboutBlocks/AboutBlocks";

const MainAbout: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl" sx={{ textAlign: "center", position: "relative" }}>
      <Typography variant="h5" sx={{ mt: 5 }}>
        {t("about")}
      </Typography>
      <Box
        sx={{
          bgcolor: "background.paper",
          display: "flex",
          mt: 5,
          justifyContent: "space-around",
          alignItems: "center",
          position: "relative",
          color: "inherit",
        }}
      >
        <AboutBlocks
          item={{
            id: 0,
            label: AboutTitle.TITLE1,
            description: AboutInfo.INFO1,
          }}
        />
      </Box>
    </Container>
  );
};

export default MainAbout;
