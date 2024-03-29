import { Modal, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import WarningIcon from "@mui/icons-material/Warning";
import { useTranslation } from "react-i18next";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";

import { ErrorMessagePropsType } from "../../types/types";

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
  borderRadius: "25px",
};

export const ErrorMessage: React.FC<ErrorMessagePropsType> = ({ setError }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setError(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <WarningIcon fontSize="large" color="error" />
          <Typography variant="h6" color={"red"}>
            {t("noEmptyField")}
          </Typography>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ mt: 2, borderRadius: "25px" }}
          >
            {t("close")}
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};
