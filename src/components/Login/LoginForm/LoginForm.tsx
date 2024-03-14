import { AccountCircle, VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";

import { useTranslation } from "react-i18next";

import { LoginFormPropsType } from "../../../types/types";

export const LoginForm: React.FC<LoginFormPropsType> = ({
  error,
  username,
  setUsername,
  showPassword,
  password,
  setPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
}) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabel
          sx={{ display: "flex", alignItems: "center" }}
          htmlFor="username"
        >
          <AccountCircle sx={{ mr: 1 }} color="info" />
          {t("name")}
        </InputLabel>
        <Input
          id="username"
          error={error}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabel
          htmlFor="password"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <KeyIcon sx={{ mr: 1 }} color="info" />
          {t("password")}
        </InputLabel>
        <Input
          id="password"
          error={error}
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
      </FormControl>
    </Box>
  );
};
