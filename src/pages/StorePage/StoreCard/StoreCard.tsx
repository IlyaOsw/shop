import * as React from "react";
import { useTranslation } from "react-i18next";
import { Backdrop, Box, Button, Fade, Modal, Paper } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import DoneIcon from "@mui/icons-material/Done";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { useCart } from "../../../hooks/useCart";
import { StoreCardProps, TransitionProps } from "../../../types/types";
import { SnackbarAlert } from "../../../components/SnackbarAlert/SnackbarAlert";
import { CloseButton } from "../../../components/CloseButton/CloseButton";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "25px",
};

export const StoreCard: React.FC<StoreCardProps> = ({
  item,
  toggleFavorite,
}) => {
  const { t } = useTranslation();
  //@ts-ignore
  const { addItem, disableCartButton, disabledButtons } = useCart();
  const [openCart, setOpenCart] = React.useState(false);
  const [openFavorite, setOpenFavorite] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [transition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleAddToFavorites = () => toggleFavorite(item.id);

  const handleFavorite = () => setFavorite((prev) => !prev);

  const buttonStyle = {
    height: "30px",
    width: "140px",
    marginTop: "5px",
    marginLeft: "5px",
    borderRadius: "25px",
  };

  return (
    <>
      <Paper
        key={item.id}
        elevation={3}
        sx={{ m: 1, mt: 5, position: "relative", width: "280px" }}
      >
        <CardMedia
          component="img"
          image={`${process.env.PUBLIC_URL}/Images/Store/${item.description}.jpg`}
          alt={item.title}
          sx={{
            margin: "0 auto",
            width: "85%",
            height: "370px",
            objectFit: "contain",
            cursor: "pointer",
          }}
          onClick={handleOpen}
        />
        {open && (
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <CloseButton onClose={handleClose} />
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                    {item.title}
                  </Typography>
                  <img
                    style={{ width: "300px", height: "350px" }}
                    src={`${process.env.PUBLIC_URL}/Images/Store/${item.description}.jpg`}
                    alt={`${item.description}`}
                  />
                </Box>
              </Box>
            </Fade>
          </Modal>
        )}
        <CardContent
          sx={{
            height: "70px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" color="text.secondary">
            {item.title}
          </Typography>
          <Typography variant="h5" color="text.primary">
            {item.price} €
          </Typography>
          <Box
            sx={{
              m: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.isStock ? (
              <Tooltip title={t("inStockTip")} arrow placement="right">
                <Button
                  disableRipple
                  disableTouchRipple
                  variant="outlined"
                  color="success"
                  sx={{
                    height: "30px",
                    cursor: "default",
                    borderRadius: "25px",
                  }}
                >
                  {t("inStock")}
                  <CheckCircleOutlineIcon sx={{ ml: 1 }} />
                </Button>
              </Tooltip>
            ) : (
              <Tooltip title={t("outOfStockTip")} arrow placement="right">
                <Button
                  disableRipple
                  disableTouchRipple
                  variant="contained"
                  color="error"
                  sx={{
                    height: "30px",
                    cursor: "default",
                    borderRadius: "25px",
                  }}
                >
                  {t("outOfStock")}
                  <HighlightOffIcon sx={{ ml: 1 }} />
                </Button>
              </Tooltip>
            )}
          </Box>
        </CardContent>
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
              onClick={() => {
                if (!favorite) {
                  setOpenFavorite(true);
                }
                handleAddToFavorites();
                handleFavorite();
              }}
              sx={buttonStyle}
            >
              {t("favorite")}
              <Checkbox
                sx={{ marginLeft: "-10px" }}
                {...label}
                icon={<FavoriteBorder color="secondary" />}
                checkedIcon={<Favorite color="secondary" />}
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
            <Button
              variant="outlined"
              color="success"
              disabled
              sx={buttonStyle}
            >
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
                onClick={() => {
                  setOpenCart(true);
                  addItem(item);
                  disableCartButton(item.id, true);
                }}
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
      </Paper>
      {openFavorite && (
        <Snackbar
          open={openFavorite}
          autoHideDuration={2000}
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
          autoHideDuration={2000}
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
