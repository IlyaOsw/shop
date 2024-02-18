import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import { StoreCard } from "../StoreCard/StoreCard";

import { ShopType } from "../../../redux/reducers/shop-reducer";

import { ProductType } from "../../../types/types";

import { ShowOnly } from "./ShowOnly/ShowOnly";
import { Bar } from "./Bar/Bar";
import { EmptyBox } from "./EmptyBox/EmptyBox";

export const Filter: React.FC = () => {
  const shopData = useSelector(
    (state: { shopPage: ShopType }) => state.shopPage
  );
  const [products, setProducts] = React.useState([...shopData]);
  const [originalProducts] = React.useState([...shopData]);
  const [empty, setEmpty] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState("");

  const noFilters = () => {
    setProducts(originalProducts);
    setEmpty(false);
  };

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

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

  const toggleFavorite = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };

  const handleCheckboxChange = (value: React.SetStateAction<string>) => {
    if (selectedOption === value) {
      setSelectedOption("");
    } else {
      setSelectedOption(value);
    }
  };

  return (
    <Box>
      <Bar
        setProducts={setProducts}
        products={products}
        setSearch={setSearch}
        filterFavorites={filterFavorites}
        noFilters={noFilters}
        setSelectedOption={setSelectedOption}
      />
      <ShowOnly
        setProducts={setProducts}
        originalProducts={originalProducts}
        selectedOption={selectedOption}
        handleCheckboxChange={handleCheckboxChange}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {filteredProducts.map((item: ProductType, index: number) => (
          <StoreCard
            key={item.id}
            item={item}
            index={index}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </Box>
      {empty && (
        <EmptyBox noFilters={noFilters} setSelectedOption={setSelectedOption} />
      )}
    </Box>
  );
};
