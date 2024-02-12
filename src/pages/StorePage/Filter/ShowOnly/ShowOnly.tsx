import {
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";

import { ShowOnlyPropsType } from "../../../../types/types";

export const ShowOnly: React.FC<ShowOnlyPropsType> = ({
  setProducts,
  originalProducts,
  selectedOption,
  handleCheckboxChange,
}) => {
  const { t } = useTranslation();

  const showInStock = () => {
    const inStock = originalProducts.filter(
      (product: { isStock: boolean }) => product.isStock
    );
    setProducts(inStock);
  };

  const showOnlyWatches = () => {
    const watchesId = [1, 4, 7, 9, 15, 17];
    const onlyWatches = originalProducts.filter((product: { id: number }) =>
      watchesId.includes(product.id)
    );
    setProducts(onlyWatches);
  };

  const showOnlyHeadphones = () => {
    const headphonesId = [2, 6, 13, 16, 19];
    const onlyHeadphones = originalProducts.filter((product: { id: number }) =>
      headphonesId.includes(product.id)
    );
    setProducts(onlyHeadphones);
  };

  const showOnlyPhones = () => {
    const phonesId = [0, 3, 5, 8, 10, 11, 12, 14, 18];
    const onlyPhones = originalProducts.filter((product: { id: number }) =>
      phonesId.includes(product.id)
    );
    setProducts(onlyPhones);
  };

  const checkBoxStyle = {
    color: "#0288d1",
    "&.Mui-checked": { color: "#0288d1" },
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
        {t("showOnly")}
      </Typography>
      <FormGroup
        row
        sx={{
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <FormControlLabel
          sx={{ ml: -0.5 }}
          control={
            <Checkbox
              sx={checkBoxStyle}
              checked={selectedOption === "InStock"}
              onClick={showInStock}
              onChange={() => handleCheckboxChange("InStock")}
            />
          }
          label={t("InStock")}
        />
        <FormControlLabel
          sx={{ pl: 6 }}
          control={
            <Checkbox
              sx={checkBoxStyle}
              color="info"
              checked={selectedOption === "Watches"}
              onClick={showOnlyWatches}
              onChange={() => handleCheckboxChange("Watches")}
            />
          }
          label={t("Watches")}
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={checkBoxStyle}
              color="info"
              checked={selectedOption === "Headphones"}
              onClick={showOnlyHeadphones}
              onChange={() => handleCheckboxChange("Headphones")}
            />
          }
          label={t("Headphones")}
        />

        <FormControlLabel
          control={
            <Checkbox
              sx={checkBoxStyle}
              color="info"
              checked={selectedOption === "Phones"}
              onClick={showOnlyPhones}
              onChange={() => handleCheckboxChange("Phones")}
            />
          }
          label={t("Phones")}
        />
      </FormGroup>
    </Box>
  );
};
