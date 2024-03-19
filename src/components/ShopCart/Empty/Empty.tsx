import { Box, Typography, Button } from "@mui/material";
import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { EmptyShopCartPropsType } from "../../../types/types";

export const Empty: React.FC<EmptyShopCartPropsType> = ({ handleClose }) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" color="error" align="center">
        {t("shopCartText1")}
      </Typography>
      <SentimentVeryDissatisfiedIcon color="error" />
      <Typography variant="h6" sx={{ mt: 2 }}>
        {t("shopCartText2")}
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 2, borderRadius: "25px" }}
        color="info"
        component={Link}
        to="/e-store"
        onClick={handleClose}
      >
        {t("shopCartLink")}
      </Button>
    </Box>
  );
};
