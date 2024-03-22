import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { Checkbox, Fade, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";

import { CloseButton } from "../CloseButton/CloseButton";

import { LoginForm } from "./LoginForm/LoginForm";
import { ErrorForm } from "./ErrorForm/ErrorForm";
import { Authentication } from "./Authentication/Authentication";

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
  const auth = getAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setIsPasswordShown((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsError(false);
    setEmail("");
    setPassword("");
  };

  const handleLogin = () => {
    handleClose();
    if (email.length === 0 || password.length === 0) {
      setIsOpen(true);
      setIsError(true);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // const user = userCredential.user;
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
        });
      setIsAuth(true);
    }
  };

  return (
    <>
      <Authentication
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsOpen={setIsOpen}
      />
      <Modal
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <CloseButton onClose={handleClose} />
            <Typography align="center" sx={{ mt: 2 }} variant="h5">
              {t("signIn")}
            </Typography>
            <Divider sx={{ m: 2 }} />
            {isError ? (
              <ErrorForm
                isError={isError}
                email={email}
                setEmail={setEmail}
                isPasswordShown={isPasswordShown}
                password={password}
                setPassword={setPassword}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
              />
            ) : (
              <LoginForm
                isError={isError}
                email={email}
                setEmail={setEmail}
                isPasswordShown={isPasswordShown}
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
