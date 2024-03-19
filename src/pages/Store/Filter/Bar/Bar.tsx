import React from "react";
import {
  Button,
  Toolbar,
  Typography,
  alpha,
  InputBase,
  styled,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";

import { BarPropsType } from "../../../../types/types";

import { CustomSelect } from "./CustomSelect/CustomSelect";

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
  height: "53px",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

export const Bar: React.FC<BarPropsType> = ({
  setProducts,
  products,
  setSearch,
  filterFavorites,
  noFilters,
  setSelectedOption,
}) => {
  const { t } = useTranslation();

  return (
    <Toolbar
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6">{t("sortBy")}</Typography>
      <CustomSelect
        products={products}
        setProducts={setProducts}
        filterFavorites={filterFavorites}
      />
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={t("search")}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(event.target.value)
          }
        />
      </Search>
      <Button
        variant="contained"
        color="info"
        onClick={() => {
          noFilters();
          setSelectedOption("");
        }}
        sx={{ m: 1, borderRadius: "25px" }}
      >
        {t("noFilters")}
      </Button>
    </Toolbar>
  );
};
