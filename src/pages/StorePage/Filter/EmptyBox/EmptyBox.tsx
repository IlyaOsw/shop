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
    <Box sx={{ height: "100vh", position: "relative" }}>
      <Box
        sx={{
          textAlign: "center",
          mt: 5,
          p: 1,
        }}
      >
        <Typography variant="h5" color="error" sx={{ mt: 2 }}>
          {t("noFavorites")}
        </Typography>
        <SentimentVeryDissatisfiedIcon color="error" />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          p: 1,
        }}
      >
        <Typography variant="h6">
          {t("continueShopping")}
          <Box>
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={() => {
                noFilters();
                setSelectedOption("");
              }}
              color="info"
            >
              {t("here")}
            </Button>
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};
