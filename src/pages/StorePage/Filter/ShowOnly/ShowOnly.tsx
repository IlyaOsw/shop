import { Box, Typography, FormControlLabel } from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import { ShowOnlyPropsType } from "../../../../types/types";

import styles from "./ShowOnly.module.scss";

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
    const watchesId = [1, 4, 7, 9, 15, 17, 22, 24, 29];
    const onlyWatches = originalProducts.filter((product: { id: number }) =>
      watchesId.includes(product.id)
    );
    setProducts(onlyWatches);
  };

  const showOnlyHeadphones = () => {
    const headphonesId = [2, 6, 13, 16, 19, 21, 23, 25, 27];
    const onlyHeadphones = originalProducts.filter((product: { id: number }) =>
      headphonesId.includes(product.id)
    );
    setProducts(onlyHeadphones);
  };

  const showOnlyPhones = () => {
    const phonesId = [0, 3, 5, 8, 10, 11, 12, 14, 18, 20, 26, 28];
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
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        {t("showOnly")}
      </Typography>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        className={styles.showOnlyBlock}
      >
        <FormControlLabel
          value="InStock"
          className={styles.radioBtn}
          control={
            <Radio
              sx={checkBoxStyle}
              onClick={showInStock}
              checked={selectedOption === "InStock"}
              onChange={() => handleCheckboxChange("InStock")}
            />
          }
          label={t("InStock")}
        />
        <FormControlLabel
          value="Phones"
          className={styles.radioBtn}
          control={
            <Radio
              sx={checkBoxStyle}
              onClick={showOnlyPhones}
              checked={selectedOption === "Phones"}
              onChange={() => handleCheckboxChange("Phones")}
            />
          }
          label={t("Phones")}
        />
        <FormControlLabel
          value="Watches"
          className={styles.radioBtn}
          control={
            <Radio
              sx={checkBoxStyle}
              onClick={showOnlyWatches}
              checked={selectedOption === "Watches"}
              onChange={() => handleCheckboxChange("Watches")}
            />
          }
          label={t("Watches")}
        />
        <FormControlLabel
          value="Headphones"
          className={styles.radioBtn}
          control={
            <Radio
              sx={checkBoxStyle}
              onClick={showOnlyHeadphones}
              checked={selectedOption === "Headphones"}
              onChange={() => handleCheckboxChange("Headphones")}
            />
          }
          label={t("Headphones")}
        />
      </RadioGroup>
    </Box>
  );
};
