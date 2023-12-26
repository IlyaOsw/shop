import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

interface CloseButtonProps {
  onClose: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => {
  return (
    <ButtonGroup
      aria-label="outlined primary button group"
      sx={{
        display: "flex",
        alignItems: "end",
        justifyContent: "end",
      }}
    >
      <Button variant="contained" onClick={onClose}>
        <CloseIcon />
      </Button>
    </ButtonGroup>
  );
};

export default CloseButton;
