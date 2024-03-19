import { AccountCircle, VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { t } from "i18next";
import KeyIcon from "@mui/icons-material/Key";

import { LoginFormPropsType } from "../../../types/types";

export const ErrorForm: React.FC<LoginFormPropsType> = ({
  isError,
  email,
  setEmail,
  isPasswordShown,
  password,
  setPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <FormControl error variant="standard" sx={{ m: 1, width: "25ch" }}>
        <InputLabel
          htmlFor="component-error"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <AccountCircle sx={{ mr: 1 }} color="error" />
          {t("email")}
        </InputLabel>
        <Input
          error={isError}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormHelperText id="component-error-text">
          {t("emailField")}
        </FormHelperText>
      </FormControl>
      <FormControl error sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabel
          htmlFor="component-error"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <KeyIcon sx={{ mr: 1 }} color="error" />
          {t("password")}
        </InputLabel>
        <Input
          error={isError}
          id="standard-adornment-password"
          type={isPasswordShown ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {isPasswordShown ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText id="component-error-text">
          {t("requiredField")}
        </FormHelperText>
      </FormControl>
    </Box>
  );
};
