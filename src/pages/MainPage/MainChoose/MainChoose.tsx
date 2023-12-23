import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import styles from "./MainChoose.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import { useTranslation } from "react-i18next";

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
        <Tab
          icon={
            <FavoriteBorderIcon
              fontSize="large"
              color="action"
              className={styles.icons}
            />
          }
          label={t("choose1")}
          className={styles.info}
        />
        <Tab
          icon={
            <ThumbUpOffAltIcon
              fontSize="large"
              color="action"
              className={styles.icons}
            />
          }
          label={t("choose2")}
          className={styles.info}
        />
        <Tab
          icon={
            <AllInclusiveIcon
              fontSize="large"
              color="action"
              className={styles.icons}
            />
          }
          label={t("choose3")}
          className={styles.info}
        />
      </Tabs>
    </Box>
  );
}
