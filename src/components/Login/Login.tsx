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
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import { CloseButton } from "../CloseButton/CloseButton";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
    <Stack direction="row" alignItems="center" justifyContent="end" spacing={1}>
      <Tooltip title={t("login")} arrow>
        <IconButton aria-label="homeicon" size="large" onClick={handleOpen}>
          <PersonIcon fontSize="large" color="action" />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-description"
      >
        <Box sx={{ m: 3 }}>
          <CloseButton onClose={handleClose} />
          <Typography sx={{ mt: 2, textAlign: "center" }} variant="h5">
            {t("signIn")}
          </Typography>
          <Divider sx={{ m: 2 }} />
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.active", mb: 1 }} />
              <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                <InputLabel>{t("name")}</InputLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
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
                        aria-label="toggle password visibility"
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
            >
              {t("login")}
            </Button>
          </Stack>
        </Box>
      </Dialog>
    </Stack>
  );
};
