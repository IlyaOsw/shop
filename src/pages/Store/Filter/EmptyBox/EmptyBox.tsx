import { Box, Typography, Button } from "@mui/material";
import { t } from "i18next";
import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

import { EmptyBoxPropsType } from "../../../../types/types";

export const EmptyBox: React.FC<EmptyBoxPropsType> = ({
  noFilters,
  setSelectedOption,
}) => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          mt: 5,
          p: 1,
        }}
      >
        <Typography variant="h6" color="error" sx={{ mt: 2 }}>
          {t("noFavorites")}
        </Typography>
        <SentimentVeryDissatisfiedIcon color="error" />
      </Box>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h6">{t("continueShopping")}</Typography>
        <Button
          variant="contained"
          sx={{ m: 2, borderRadius: "25px" }}
          onClick={() => {
            noFilters();
            setSelectedOption("");
          }}
          color="info"
        >
          {t("here")}
        </Button>
      </Box>
    </>
  );
};
