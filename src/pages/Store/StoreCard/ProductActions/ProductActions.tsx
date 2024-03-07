import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { CardActions, Tooltip, Button, Checkbox, Box } from "@mui/material";
import { t } from "i18next";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useCart } from "../../../../hooks/useCart";
import { ProductActionsPropsType } from "../../../../types/types";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const buttonStyle = {
  height: "30px",
  width: "140px",
  marginTop: "5px",
  marginLeft: "5px",
  borderRadius: "25px",
};

export const ProductActions: React.FC<ProductActionsPropsType> = ({
  item,
  toggleFavorite,
  setOpenFavorite,
  setOpenCart,
}) => {
  //@ts-ignore
  const { addItem, disableCartButton, disabledButtons } = useCart();

  const [favorite, setFavorite] = React.useState(false);

  const handleAddToFavorites = () => {
    toggleFavorite(item.id);
    handleFavorite();
    if (!favorite) {
      setOpenFavorite(true);
    }
  };

  const handleAddToCart = () => {
    setOpenCart(true);
    addItem(item);
    disableCartButton(item.id, true);
  };

  const handleFavorite = () => setFavorite((prev) => !prev);

  return (
    <CardActions
      disableSpacing
      sx={{
        display: "flex",
        justifyContent: "space-around",
        mt: 2,
      }}
    >
      <Tooltip title={t("addToFavorites")} arrow>
        <Button
          color="secondary"
          variant="outlined"
          onClick={handleAddToFavorites}
          sx={buttonStyle}
        >
          {t("favorite")}
          <Checkbox
            sx={{ marginLeft: "-8px" }}
            {...label}
            icon={
              <FavoriteBorder color="secondary" sx={{ marginRight: "-10px" }} />
            }
            checkedIcon={
              <Favorite color="secondary" sx={{ marginRight: "-10px" }} />
            }
            checked={favorite}
          />
        </Button>
      </Tooltip>
      {disabledButtons[item.id] ? (
        <Button
          variant="contained"
          color="success"
          aria-label="added to shopping cart"
          sx={buttonStyle}
        >
          {t("added")}
          <Box sx={{ paddingLeft: "2px", paddingTop: "3px" }}>
            <DoneIcon />
          </Box>
        </Button>
      ) : !item.isStock ? (
        <Button variant="outlined" color="success" disabled sx={buttonStyle}>
          {t("add")}
          <Box sx={{ paddingLeft: "2px", paddingTop: "3px" }}>
            <DoneIcon />
          </Box>
        </Button>
      ) : (
        <Tooltip title={t("addToCart")} arrow>
          <Button
            variant="contained"
            color="info"
            onClick={handleAddToCart}
            sx={buttonStyle}
          >
            {t("add")}
            <Box
              sx={{
                paddingLeft: "3px",
                paddingTop: "8px",
              }}
            >
              <AddShoppingCartIcon />
            </Box>
          </Button>
        </Tooltip>
      )}
    </CardActions>
  );
};
