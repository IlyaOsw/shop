import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import { StoreCard } from "../StoreCard/StoreCard";

import { ShopType } from "../../../redux/reducers/shop-reducer";

import { Product } from "../../../types/types";

import { ShowOnly } from "./ShowOnly/ShowOnly";
import { Bar } from "./Bar/Bar";

export const Filter: React.FC = React.memo(() => {
  const shopData = useSelector(
    (state: { shopPage: ShopType }) => state.shopPage
  );
  const [products, setProducts] = React.useState([...shopData]);
  const [originalProducts] = React.useState([...shopData]);

  const [search, setSearch] = React.useState("");

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

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
    <Box>
      <Bar
        setProducts={setProducts}
        originalProducts={originalProducts}
        products={products}
        setSearch={setSearch}
      />
      <ShowOnly setProducts={setProducts} originalProducts={originalProducts} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {filteredProducts.map((item: Product, index: number) => (
          <StoreCard
            key={item.id}
            item={item}
            index={index}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </Box>
    </Box>
  );
});
