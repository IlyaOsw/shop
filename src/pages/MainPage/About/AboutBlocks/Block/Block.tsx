import { Box, Typography } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useTranslation } from "react-i18next";
import { AboutBlocksType } from "../AboutBlocks";

export const Block: React.FC<AboutBlocksType> = ({ item }) => {
  const { t } = useTranslation();

  return (
    <Box
      key={item.id}
      sx={{
        textAlign: "start",
        maxWidth: "300px",
        padding: "10px",
      }}
    >
      <MoreHorizIcon />
      <Typography variant="h6" sx={{ paddingBottom: "5px" }}>
        {t(item.label)}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {t(item.description)}
      </Typography>
    </Box>
  );
};
