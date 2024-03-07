import {
  Box,
  Button,
  InputBase,
  Snackbar,
  Tooltip,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import { useTranslation } from "react-i18next";

import { TransitionProps } from "@mui/material/transitions";

import { ErrorMessage } from "../../../components/ErrorMessage/ErrorMessage";
import { SnackbarAlert } from "../../../components/SnackbarAlert/SnackbarAlert";

const Search = styled("div")(({ theme }) => ({
  position: "relative",

  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  outline: "1px solid gray",
  borderRadius: "4px",
  height: "50px",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

export const Subscribe: React.FC = () => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState(false);

  const [transition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const subscribe = () => {
    if (value.length === 0) {
      setError(true);
    } else {
      setValue("");
      setError(false);
      setSnackbar(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        position: "relative",
      }}
    >
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        {t("getNewLetter")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          mt: 2,
          mb: 2,
        }}
      >
        <Search sx={{ m: 1 }}>
          <SearchIconWrapper>
            <EastIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder={t("enterMail")}
            inputProps={{ "aria-label": "search" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Search>
        <Tooltip title={t("subscribeToUpdates")} arrow>
          <Button
            variant="contained"
            color="info"
            sx={{ height: "50px", borderRadius: "25px" }}
            onClick={subscribe}
          >
            {t("subscribe")}
          </Button>
        </Tooltip>
      </Box>
      {error && <ErrorMessage />}
      {snackbar && (
        <Snackbar
          open={snackbar}
          autoHideDuration={2000}
          onClose={() => setSnackbar(false)}
          TransitionComponent={transition}
          key={transition ? transition.name : ""}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SnackbarAlert onClose={() => setSnackbar(false)}>
            {t("subscribed")}
          </SnackbarAlert>
        </Snackbar>
      )}
    </Box>
  );
};
