import { Box, Typography } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useTranslation } from "react-i18next";

enum AboutTitle {
  TITLE1 = "aboutTitle1",
  TITLE2 = "aboutTitle2",
  TITLE3 = "aboutTitle3",
  TITLE4 = "aboutTitle4",
}
enum AboutInfo {
  INFO1 = "aboutInfo1",
  INFO2 = "aboutInfo2",
  INFO3 = "aboutInfo3",
  INFO4 = "aboutInfo4",
}
const about: { id: number; label: AboutTitle; description: AboutInfo }[] = [
  { id: 0, label: AboutTitle.TITLE1, description: AboutInfo.INFO1 },
  { id: 1, label: AboutTitle.TITLE2, description: AboutInfo.INFO2 },
  { id: 2, label: AboutTitle.TITLE3, description: AboutInfo.INFO3 },
  { id: 3, label: AboutTitle.TITLE4, description: AboutInfo.INFO4 },
];
const AboutBlocks: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {about.map((item) => (
        <Box
          key={item.id}
          sx={{
            textAlign: "start",
            maxWidth: "350px",
            padding: "10px",
          }}
        >
          <MoreHorizIcon />
          <Typography variant="h5" sx={{ paddingBottom: "20px" }}>
            {t(item.label)}
          </Typography>
          <Typography variant="h6">{t(item.description)}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default AboutBlocks;
