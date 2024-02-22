import { Box, Tooltip, Button } from "@mui/material";
import { t } from "i18next";
import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { LearnMorePropsType } from "../../../../../types/types";

export const LearnMore: React.FC<LearnMorePropsType> = ({
  expanded,
  setExpanded,
}) => {
  const handleExpandClick = () => setExpanded(!expanded);

  const buttonsStyle = { marginLeft: "5px", borderRadius: "25px" };

  return (
    <Box onClick={handleExpandClick} aria-expanded={expanded}>
      {expanded ? (
        <Tooltip title={t("close")} arrow>
          <Button variant="contained" color="secondary" style={buttonsStyle}>
            <KeyboardArrowUpIcon />
            {t("close")}
          </Button>
        </Tooltip>
      ) : (
        <Tooltip title={t("learnMore")} arrow>
          <Button variant="contained" color="secondary" style={buttonsStyle}>
            <KeyboardArrowDownIcon />
            {t("learnMore")}
          </Button>
        </Tooltip>
      )}
    </Box>
  );
};
