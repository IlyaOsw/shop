import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTranslation } from "react-i18next";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import styles from "./MainChoose.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

export default function MainChoose() {
  const { t } = useTranslation();

  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Typography variant="h4" className={styles.whyTitle}>
        {t("whyWe")}
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        orientation={isSmallScreen ? "vertical" : "horizontal"}
      >
        <FavoriteBorderIcon fontSize="large" color="action" />
        <Tab label={t("choose1")} />
        <ThumbUpOffAltIcon fontSize="large" color="action" />
        <Tab label={t("choose2")} />
        <AllInclusiveIcon fontSize="large" color="action" />
        <Tab label={t("choose3")} />
      </Tabs>
    </Box>
  );
}
