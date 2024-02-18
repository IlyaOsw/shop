import { Modal, Box, Typography, Button } from "@mui/material";
import { t } from "i18next";
import React from "react";
import ErrorIcon from "@mui/icons-material/Error";

import { ErrorMessagePropsType } from "../../../../../types/types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export const ErrorMessage: React.FC<ErrorMessagePropsType> = ({
  open,
  setOpen,
}) => {
  const handleClose = () => setOpen(false);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <ErrorIcon fontSize="large" color="error" />
        <Typography variant="h6" color={"red"}>
          {t("noEmptyField")}
        </Typography>
        <Button variant="contained" onClick={handleClose} sx={{ mt: 3 }}>
          {t("close")}
        </Button>
      </Box>
    </Modal>
  );
};
