import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Paper } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

import { StoreCardProps, TransitionProps } from "../../../types/types";
import { SnackbarAlert } from "../../../components/SnackbarAlert/SnackbarAlert";

import { ProductImage } from "./ProductImage/ProductImage";
import { ProductContent } from "./ProductContent/ProductContent";
import { ProductActions } from "./ProductActions/ProductActions";

export const StoreCard: React.FC<StoreCardProps> = ({
  item,
  toggleFavorite,
}) => {
  const { t } = useTranslation();

  const [openCart, setOpenCart] = useState(false);
  const [openFavorite, setOpenFavorite] = useState(false);

  const [transition] = useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  return (
    <>
      <Paper
        key={item.id}
        sx={{
          m: 1,
          mt: 5,
          position: "relative",
          width: "280px",
          transition: "box-shadow 0.3s",
          "&:hover": {
            boxShadow: (theme) => theme.shadows[8],
          },
        }}
      >
        <ProductImage item={item} />
        <ProductContent item={item} />
        <ProductActions
          item={item}
          toggleFavorite={toggleFavorite}
          setOpenFavorite={setOpenFavorite}
          setOpenCart={setOpenCart}
        />
      </Paper>
      {openFavorite && (
        <Snackbar
          open={openFavorite}
          autoHideDuration={1000}
          onClose={() => setOpenFavorite(false)}
          TransitionComponent={transition}
          key={transition ? transition.name : ""}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SnackbarAlert
            onClose={() => setOpenFavorite(false)}
            severity="success"
          >
            {t("AddedToFavorites")}
          </SnackbarAlert>
        </Snackbar>
      )}
      {openCart && (
        <Snackbar
          open={openCart}
          autoHideDuration={1000}
          onClose={() => setOpenCart(false)}
          TransitionComponent={transition}
          key={transition ? transition.name : ""}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SnackbarAlert onClose={() => setOpenCart(false)} severity="success">
            {t("addedToCart")}
          </SnackbarAlert>
        </Snackbar>
      )}
    </>
  );
};
