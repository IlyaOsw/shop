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

  return (
    <Box
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >
      {expanded ? (
        <Tooltip title={t("close")} arrow>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ marginLeft: "5px" }}
          >
            <KeyboardArrowUpIcon />
            {t("close")}
          </Button>
        </Tooltip>
      ) : (
        <Tooltip title={t("learnMore")} arrow>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ marginLeft: "5px" }}
          >
            <KeyboardArrowDownIcon />
            {t("learnMore")}
          </Button>
        </Tooltip>
      )}
    </Box>
  );
};
