import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import React, { useRef } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import KeyIcon from "@mui/icons-material/Key";
import { useTranslation } from "react-i18next";
import ButtonGroup from "@mui/material/ButtonGroup";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
};

export default function LoginButton() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack direction="row" alignItems="center" justifyContent="end" spacing={1}>
      <IconButton aria-label="homeicon" size="large" onClick={handleOpen}>
        <PersonIcon fontSize="large" color="action" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ButtonGroup
            aria-label="outlined primary button group"
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "end",
            }}
          >
            <Button
              variant="contained"
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "end",
              }}
              onClick={() => handleClose()}
            >
              X
            </Button>
          </ButtonGroup>
          <Box sx={{ "& > :not(style)": { m: 2 } }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.active", mr: 2, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label={t("name")}
                variant="standard"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <KeyIcon sx={{ color: "action.active", mr: 2, my: 0.5 }} />
              <TextField
                type="password"
                id="input-with-sx"
                label={t("password")}
                variant="standard"
              />
            </Box>
          </Box>
          <Stack direction="row" spacing={2} sx={{ ml: 10, mt: 4 }}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={() => handleClose()}
            >
              {t("login")}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
}
