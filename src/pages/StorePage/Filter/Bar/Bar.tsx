import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  alpha,
  InputBase,
  styled,
  SelectChangeEvent,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";

import { BarPropsType } from "../../../../types/types";

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
  const [filter, setFilter] = React.useState("");

  const PriceHighToLow = () => {
    const sortedList = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedList);
  };

  const PriceLowToHigh = () => {
    const sortedList = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedList);
  };

  const handleChange = (event: SelectChangeEvent) =>
    setFilter(event.target.value);

  return (
    <Toolbar
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6" sx={{ p: 1 }}>
        {t("sortBy")}
      </Typography>
      <FormControl
        sx={{
          minWidth: 160,
          m: 1,
        }}
      >
        <InputLabel
          sx={{
            color: "inherit",
          }}
        >
          {t("filter")}
        </InputLabel>
        <Select
          value={filter}
          onChange={handleChange}
          autoWidth
          label={t("filter")}
          sx={{
            color: "inherit",
          }}
        >
          <MenuItem value={10} onClick={PriceLowToHigh}>
            {t("priceAscending")}
          </MenuItem>
          <MenuItem value={21} onClick={PriceHighToLow}>
            {t("priceDescending")}
          </MenuItem>
          <MenuItem value={22} onClick={filterFavorites}>
            {t("favoritesFirst")}
          </MenuItem>
        </Select>
      </FormControl>
      <Search sx={{ m: 1 }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={t("search")}
          inputProps={{ "aria-label": "search" }}
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
        sx={{ m: 1 }}
      >
        {t("noFilters")}
      </Button>
    </Toolbar>
  );
};
