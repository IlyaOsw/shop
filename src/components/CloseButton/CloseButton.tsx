import React from "react";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

import { CloseButtonProps } from "../../types/types";

export const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "end",
        justifyContent: "end",
      }}
    >
      <Button variant="contained" color="info" onClick={onClose}>
        <CloseIcon />
      </Button>
    </Box>
  );
};
