import { CardContent, Typography, Box, Tooltip, Button } from "@mui/material";
import { t } from "i18next";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { ProductPropsType } from "../../../../types/types";

export const ProductContent: React.FC<ProductPropsType> = ({ item }) => {
  return (
    <CardContent
      sx={{
        height: "75px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6" color="text.secondary">
        {item.title}
      </Typography>
      <Typography variant="h5" color="text.primary">
        {item.price} €
      </Typography>
      <Box
        sx={{
          m: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {item.isStock ? (
          <Tooltip title={t("inStockTip")} arrow placement="right">
            <Button
              disableRipple
              disableTouchRipple
              variant="outlined"
              color="success"
              sx={{
                height: "30px",
                cursor: "default",
                borderRadius: "25px",
              }}
            >
              {t("inStock")}
              <CheckCircleOutlineIcon sx={{ ml: 1 }} />
            </Button>
          </Tooltip>
        ) : (
          <Tooltip title={t("outOfStockTip")} arrow placement="right">
            <Button
              disableRipple
              disableTouchRipple
              variant="contained"
              color="error"
              sx={{
                height: "30px",
                cursor: "default",
                borderRadius: "25px",
              }}
            >
              {t("outOfStock")}
              <HighlightOffIcon sx={{ ml: 1 }} />
            </Button>
          </Tooltip>
        )}
      </Box>
    </CardContent>
  );
};
