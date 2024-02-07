import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  alpha,
  AppBar,
  Box,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StoreCard } from "../StoreCard/StoreCard";
import { ShopType } from "../../../redux/reducers/shop-reducer";

export interface StoreCardProps {
  item: {
    id: number;
    title: string;
    price: number;
    description: string;
    isFavorite: boolean;
    isStock: boolean;
  };
  index: number;
  toggleFavorite: (productId: number) => void;
}

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

const Filter: React.FC = React.memo(() => {
  const { t } = useTranslation();
  const shopData = useSelector(
    (state: { shopPage: ShopType }) => state.shopPage
  );
  const [products, setProducts] = React.useState([...shopData]);
  const noFilters = () => setProducts(shopData);
  const [filter, setFilter] = React.useState("");
  const [search, setSearch] = React.useState("");

  const PriceHighToLow = () => {
    const sortedList = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedList);
  };
  const PriceLowToHigh = () => {
    const sortedList = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedList);
  };
  const filterFavorites = () => {
    const favoriteFirst = [...products].filter((product) => product.isFavorite);
    setProducts(favoriteFirst);
  };
  const filteredProducts = [...products].filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  const handleChange = (event: SelectChangeEvent) =>
    setFilter(event.target.value);

  const toggleFavorite = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };

  return (
    <div>
      <AppBar position="relative" color="default">
        <Toolbar
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
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
              <MenuItem value={"No filters"} onClick={noFilters}>
                <em>{t("noFilters")} </em>
              </MenuItem>
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
          <Search
            sx={{ m: 1 }}
            //@ts-ignore
            onChange={(event) => setSearch(event.target.value)}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t("search")}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {filteredProducts.map((item: StoreCardProps["item"], index: number) => (
          <StoreCard
            key={item.id}
            item={item}
            index={index}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </Box>
    </div>
  );
});

export default Filter;
