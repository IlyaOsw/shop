import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import { StoreCard } from "../StoreCard/StoreCard";

import { ShopType } from "../../../redux/reducers/shop-reducer";

import { ProductType } from "../../../types/types";

import { ShowOnly } from "./ShowOnly/ShowOnly";
import { Bar } from "./Bar/Bar";
import { EmptyBox } from "./EmptyBox/EmptyBox";
import { CustomPagination } from "./Pagination/Pagination";

export const Filter: React.FC = () => {
  const shopData = useSelector(
    (state: { shopPage: ShopType }) => state.shopPage
  );
  const [products, setProducts] = useState([...shopData]);
  const [originalProducts] = useState([...shopData]);
  const [empty, setEmpty] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const [productsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const noFilters = () => {
    setProducts(originalProducts);
    setEmpty(false);
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
        {currentProducts.map((item: ProductType, index: number) => (
          <StoreCard
            key={item.id}
            item={item}
            index={index}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </Box>
      <CustomPagination
        products={products}
        productsPerPage={productsPerPage}
        handlePage={handlePage}
      />
      {empty && (
        <EmptyBox noFilters={noFilters} setSelectedOption={setSelectedOption} />
      )}
    </Box>
  );
};
