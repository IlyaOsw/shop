import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { CustomSelectPropsType } from "../../../../../types/types";

export const CustomSelect: React.FC<CustomSelectPropsType> = ({
  products,
  setProducts,
  filterFavorites,
}) => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("");

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
    <FormControl
      sx={{
        minWidth: 160,
        m: 1,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "gray",
          },
        },
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
  );
};
