import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Tooltip from "@mui/material/Tooltip";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { Checkbox, Fade, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";

import { CloseButton } from "../CloseButton/CloseButton";

import { LoginForm } from "./LoginForm/LoginForm";
import { ErrorForm } from "./ErrorForm/ErrorForm";

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
  borderRadius: "25px",
};

export const Login: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setError(false);
    setUsername("");
    setPassword("");
  };

  const handleLogin = () => {
    setOpen(false);
    setError(false);
    setUsername("");
    setPassword("");
    if (username.length === 0 || password.length === 0) {
      setOpen(true);
      setError(true);
    }
  };

  return (
    <>
      <Tooltip title={t("login")} arrow>
        <IconButton onClick={handleOpen}>
          <PersonIcon fontSize="large" style={{ color: "#ffffff" }} />
        </IconButton>
      </Tooltip>
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
            <CloseButton onClose={handleClose} />
            <Typography sx={{ mt: 2, textAlign: "center" }} variant="h5">
              {t("signIn")}
            </Typography>
            <Divider sx={{ m: 2 }} />
            {error ? (
              <ErrorForm
                error={error}
                username={username}
                setUsername={setUsername}
                showPassword={showPassword}
                password={password}
                setPassword={setPassword}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
              />
            ) : (
              <LoginForm
                error={error}
                username={username}
                setUsername={setUsername}
                showPassword={showPassword}
                password={password}
                setPassword={setPassword}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
              />
            )}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Checkbox />
              <Typography>{t("rememberMe")}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
              <Button
                variant="contained"
                color="info"
                endIcon={<SendIcon />}
                onClick={handleLogin}
                sx={{
                  borderRadius: "25px",
                }}
              >
                {t("login")}
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
