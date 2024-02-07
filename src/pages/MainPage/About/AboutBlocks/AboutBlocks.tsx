import React from "react";
import { Box } from "@mui/material";
import { AboutItem } from "./AboutItem/AboutItem";

export enum AboutTitle {
  TITLE1 = "aboutTitle1",
  TITLE2 = "aboutTitle2",
  TITLE3 = "aboutTitle3",
  TITLE4 = "aboutTitle4",
}
export enum AboutInfo {
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

export type AboutBlocksType = {
  item: {
    id: number;
    label: AboutTitle;
    description: AboutInfo;
  };
};

export const AboutBlocks: React.FC<AboutBlocksType> = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {about.map((item) => (
        <AboutItem item={item} key={item.id} />
      ))}
    </Box>
  );
};
