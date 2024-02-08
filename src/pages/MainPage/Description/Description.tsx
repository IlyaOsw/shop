import * as React from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
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
    <FavoriteBorderIcon fontSize="large" color="secondary" />,
    <ThumbUpOffAltIcon fontSize="large" color="secondary" />,
    <AllInclusiveIcon fontSize="large" color="secondary" />,
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
          bgcolor: "background.paper",
          position: "relative",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            m: 4,
          }}
        >
          {t("whyWe")}
        </Typography>
        <AppBar position="static" color="inherit">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            variant="fullWidth"
            aria-label="full width tabs example"
            orientation={isSmallScreen ? "vertical" : "horizontal"}
          >
            <Tab label={t("chooseTitle1")} {...a11yProps(0)} />
            <Tab label={t("chooseTitle2")} {...a11yProps(1)} />
            <Tab label={t("chooseTitle3")} {...a11yProps(2)} />
          </Tabs>
        </AppBar>
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
                color="text.secondary"
                sx={{ maxWidth: "400px", textAlign: "center", mt: 1 }}
              >
                {t(item.label)}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MoreHorizIcon fontSize="large" color="secondary" />
              </Box>
            </TabPanel>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
