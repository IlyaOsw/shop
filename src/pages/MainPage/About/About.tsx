import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";

import { AboutBlocks, AboutInfo, AboutTitle } from "./AboutBlocks/AboutBlocks";

export const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography variant="h5" sx={{ mt: 10 }}>
        {t("about")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          mt: 5,
          justifyContent: "space-around",
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
    </Box>
  );
};
