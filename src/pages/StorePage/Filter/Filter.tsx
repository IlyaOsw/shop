import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  alpha,
  AppBar,
  Box,
  Button,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import SearchIcon from "@mui/icons-material/Search";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
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

export const Filter: React.FC = React.memo(() => {
  const { t } = useTranslation();
  const shopData = useSelector(
    (state: { shopPage: ShopType }) => state.shopPage
  );
  const [products, setProducts] = React.useState([...shopData]);
  const [originalProducts] = React.useState([...shopData]);
  const [filter, setFilter] = React.useState("");
  const [search, setSearch] = React.useState("");
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
    const favoriteFirst = products.filter((product) => product.isFavorite);
    if (favoriteFirst.length > 0) {
      setProducts(favoriteFirst);
      setEmpty(false);
    } else {
      setProducts(favoriteFirst);
      setEmpty(true);
    }
  };

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  const showOnlyPhone = () => {
    const phonesId = [0, 3, 5, 8, 10, 11, 12, 14];
    const onlyPhones = originalProducts.filter((product) =>
      phonesId.includes(product.id)
    );
    setProducts(onlyPhones);
  };

  const showOnlyHeadphones = () => {
    const headphonesId = [2, 6, 13];
    const onlyHeadphones = originalProducts.filter((product) =>
      headphonesId.includes(product.id)
    );
    setProducts(onlyHeadphones);
  };

  const showOnlyWatches = () => {
    const watchesId = [1, 4, 7, 9, 15];
    const onlyWatches = originalProducts.filter((product) =>
      watchesId.includes(product.id)
    );
    setProducts(onlyWatches);
  };

  const toggleFavorite = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };
  const handleChange = (event: SelectChangeEvent) =>
    setFilter(event.target.value);

  return (
    <Box>
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
          <Button
            variant="contained"
            color="secondary"
            onClick={noFilters}
            sx={{ m: 1 }}
          >
            {t("noFilters")}
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          height: "100px",
          width: "100%",
          mt: 2,
          position: "relative",
          bgcolor: "background.paper",
          color: "inherit",
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
          {t("showOnly")}
        </Typography>
        <RadioGroup
          row
          aria-labelledby="demo-form-control-label-placement"
          name="position"
          defaultValue="top"
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <FormControlLabel
            value="Phones"
            control={<Radio onClick={showOnlyPhone} />}
            label="Phones"
          />
          <FormControlLabel
            value="Headphones"
            control={<Radio onClick={showOnlyHeadphones} />}
            label="Headphones"
          />
          <FormControlLabel
            value="Watches"
            control={<Radio onClick={showOnlyWatches} />}
            label="Watches"
          />
        </RadioGroup>
      </Box>
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
    </Box>
  );
});
