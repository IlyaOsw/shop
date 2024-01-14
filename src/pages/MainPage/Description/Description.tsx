import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
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

  const chooseLabels = [
    { id: 0, label: "choose1" },
    { id: 1, label: "choose2" },
    { id: 2, label: "choose3" },
  ];
  const icons = [
    <FavoriteBorderIcon fontSize="large" color="action" />,
    <ThumbUpOffAltIcon fontSize="large" color="action" />,
    <AllInclusiveIcon fontSize="large" color="action" />,
  ];
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          m: 4,
        }}
      >
        {t("whyWe")}
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        orientation={isSmallScreen ? "vertical" : "horizontal"}
      >
        {chooseLabels.map((item, index) => (
          <Tab
            key={item.id}
            sx={{ fontSize: "16px", m: 2 }}
            icon={icons[index]}
            label={t(item.label)}
          />
        ))}
      </Tabs>
    </>
  );
}
