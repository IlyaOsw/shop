import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

interface CloseButtonProps {
  onClose: () => void;
}

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
