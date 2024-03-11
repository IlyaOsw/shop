import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Divider, Typography } from "@mui/material";

import { AboutBlocks, AboutInfo, AboutTitle } from "./AboutBlocks/AboutBlocks";

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h5" align="center" sx={{ mt: 10 }}>
        {t("about")}
      </Typography>
      <Divider sx={{ m: 2 }} color="lightgray" />
      <Box
        sx={{
          display: "flex",
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
