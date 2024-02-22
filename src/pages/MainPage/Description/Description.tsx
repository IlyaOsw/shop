import * as React from "react";
import { useTranslation } from "react-i18next";
import { Divider, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

import { TabPanelProps } from "../../../types/types";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

export const Description: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const icons = [
    <FavoriteBorderIcon fontSize="large" color="primary" />,
    <ThumbUpOffAltIcon fontSize="large" color="primary" />,
    <AllInclusiveIcon fontSize="large" color="primary" />,
  ];

  const chooseLabels: { id: number; label: string }[] = [
    { id: 0, label: "choose1" },
    { id: 1, label: "choose2" },
    { id: 2, label: "choose3" },
  ];
  return (
    <Container>
      <Box
        sx={{
          position: "relative",
          mt: 10,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
          }}
        >
          {t("whyWe")}
        </Typography>
        <Divider sx={{ m: 2 }} color="lightgray" />
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          orientation={isSmallScreen ? "vertical" : "horizontal"}
        >
          <Tab
            label={t("chooseTitle1")}
            sx={{ color: theme.palette.info.light }}
          />
          <Tab
            label={t("chooseTitle2")}
            sx={{ color: theme.palette.info.light }}
          />
          <Tab
            label={t("chooseTitle3")}
            sx={{ color: theme.palette.info.light }}
          />
        </Tabs>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {chooseLabels.map((item, index) => (
            <TabPanel
              key={item.id}
              value={value}
              index={index}
              dir={theme.direction}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {icons[index]}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  maxWidth: "400px",
                  height: "200px",
                  textAlign: "center",
                  mt: 2,
                }}
              >
                {t(item.label)}
              </Typography>
            </TabPanel>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
