import {
  Box,
  Button,
  InputBase,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import { useTranslation } from "react-i18next";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
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
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        p: 1,
        position: "relative",
        borderRadius: "4px",
      }}
    >
      <Typography variant="h6" sx={{ mr: 5, ml: 1 }}>
        {t("getNewLetter")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Search sx={{ m: 1 }}>
          <SearchIconWrapper>
            <EastIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder={t("enterMail")}
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Button variant="contained" color="info" sx={{ height: "50px" }}>
          {t("subscribe")}
        </Button>
      </Box>
    </Box>
  );
};
