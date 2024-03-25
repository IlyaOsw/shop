import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useTranslation } from "react-i18next";

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

export const LogoutMessage: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => setOpen(false);
  return (
    <Box>
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
            <ErrorOutlineIcon fontSize="large" color="info" />
            <Typography id="transition-modal-title" variant="h6">
              {t("loggedOut")}
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
    </Box>
  );
};
