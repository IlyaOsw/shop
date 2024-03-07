import React from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import KeyIcon from "@mui/icons-material/Key";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Tooltip from "@mui/material/Tooltip";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { Fade, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";

import { CloseButton } from "../CloseButton/CloseButton";

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <AccountCircle sx={{ color: "action.active", mb: 1 }} />
                <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                  <InputLabel>{t("name")}</InputLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <KeyIcon sx={{ color: "action.active", mb: 1 }} />
                <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    {t("password")}
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
            </Box>
            <Stack
              direction="row"
              sx={{ display: "flex", justifyContent: "center", m: 3 }}
            >
              <Button
                variant="contained"
                color="info"
                endIcon={<SendIcon />}
                onClick={() => handleClose()}
                sx={{ borderRadius: "25px" }}
              >
                {t("login")}
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
