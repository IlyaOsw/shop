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
  error,
  username,
  setUsername,
  showPassword,
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
          {t("name")}
        </InputLabel>
        <Input
          error={error}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormHelperText id="component-error-text">
          {t("requiredField")}
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
          error={error}
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        <FormHelperText id="component-error-text">
          {t("requiredField")}
        </FormHelperText>
      </FormControl>
    </Box>
  );
};
