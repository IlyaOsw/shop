import React from "react";
import { Box } from "@mui/material";

import { AboutTitle, AboutInfo } from "../../../../types/types";

import { AboutItem } from "./AboutItem/AboutItem";

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
export { AboutTitle, AboutInfo };
