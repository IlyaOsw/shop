import React from "react";
import {
  AppBar,
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
  Box,
  Paper,
} from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";

import { BarPropsType } from "../../../../types/types";

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
  originalProducts,
  products,
  setSearch,
}) => {
  const { t } = useTranslation();
  const [filter, setFilter] = React.useState("");
  const [empty, setEmpty] = React.useState(false);

  const noFilters = () => setProducts(originalProducts);

  const PriceHighToLow = () => {
    const sortedList = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedList);
  };

  const PriceLowToHigh = () => {
    const sortedList = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedList);
  };

  const filterFavorites = () => {
    const favoriteFirst = products.filter(
      (product: { isFavorite: boolean }) => product.isFavorite
    );
    if (favoriteFirst.length > 0) {
      setProducts(favoriteFirst);
      setEmpty(false);
    } else {
      setProducts(favoriteFirst);
      setEmpty(true);
    }
  };

  const handleChange = (event: SelectChangeEvent) =>
    setFilter(event.target.value);

  return (
    <AppBar position="relative" color="default">
      <Toolbar
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h6" sx={{ p: 1 }}>
          {t("sortBy")}
        </Typography>
        <FormControl
          sx={{
            margin: "0px 20px",
            minWidth: 200,
          }}
        >
          <InputLabel id="demo-simple-select-autowidth-label">
            {t("filter")}
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={filter}
            onChange={handleChange}
            autoWidth
            label={t("filter")}
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
          color="secondary"
          onClick={noFilters}
          sx={{ m: 1 }}
        >
          {t("noFilters")}
        </Button>
      </Toolbar>
      {empty && (
        <Box sx={{ height: "100vh", position: "relative" }}>
          <Paper elevation={4}>
            <Box
              sx={{
                textAlign: "center",
                mt: 5,
                p: 1,
              }}
            >
              <Typography variant="h5" color="error" sx={{ mt: 2 }}>
                {t("noFavorites")}
              </Typography>
              <SentimentVeryDissatisfiedIcon color="error" />
            </Box>
            <Box
              sx={{
                textAlign: "center",
                p: 1,
              }}
            >
              <Typography variant="h6" color="text.secondary">
                {t("continueShopping")}
                <Box>
                  <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={noFilters}
                    color="success"
                  >
                    {t("here")}
                  </Button>
                </Box>
              </Typography>
            </Box>
          </Paper>
        </Box>
      )}
    </AppBar>
  );
};
