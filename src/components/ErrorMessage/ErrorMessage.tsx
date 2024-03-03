import { Modal, Box, Typography, Button } from "@mui/material";
import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { useTranslation } from "react-i18next";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";

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

export const ErrorMessage: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
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
          <ErrorIcon fontSize="large" color="error" />
          <Typography variant="h6" color={"red"}>
            {t("noEmptyField")}
          </Typography>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ mt: 3, borderRadius: "25px" }}
          >
            {t("close")}
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};
