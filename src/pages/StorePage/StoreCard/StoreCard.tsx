import * as React from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
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

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

export const StoreCard: React.FC<StoreCardProps> = React.memo(
  ({ item, toggleFavorite }) => {
    const { t } = useTranslation();
    //@ts-ignore
    const { addItem } = useCart();
    const [, setOpen] = React.useState(false);
    const [openCart, setOpenCart] = React.useState(false);
    const [openFavorite, setOpenFavorite] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);
    const [favorite, setFavorite] = React.useState(false);
    const [transition, setTransition] = React.useState<
      React.ComponentType<TransitionProps> | undefined
    >(undefined);

    const handleClick =
      (Transition: React.ComponentType<TransitionProps>) => () => {
        setTransition(() => Transition);
        setOpen(true);
      };

    const disableButton = () => setDisabled(true);
    const handleAddToFavorites = () => toggleFavorite(item.id);
    const handleFavorite = () => setFavorite((prev) => !prev);

    const buttonStyle = { height: "30px", width: "140px", marginTop: "5px" };

    return (
      <>
        <Paper elevation={3} sx={{ m: 2, mt: 5 }}>
          <Card
            key={item.id}
            sx={{
              position: "relative",
              maxWidth: "250px",
            }}
          >
            <CardMedia
              component="img"
              image={`${process.env.PUBLIC_URL}/Images/Store/${item.description}.jpg`}
              alt={item.title}
              sx={{
                margin: "0 auto",
                width: "90%",
                height: "350px",
                objectFit: "contain",
              }}
            />
            <CardContent
              sx={{
                height: "55px",
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
            </CardContent>
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
                      borderRadius: "15px",
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
                      borderRadius: "15px",
                    }}
                  >
                    {t("outOfStock")}
                    <HighlightOffIcon sx={{ ml: 1 }} />
                  </Button>
                </Tooltip>
              )}
            </Box>
            <CardActions
              disableSpacing
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-end",
              }}
            >
              <Tooltip title={t("addToFavorites")} arrow>
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={() => {
                    if (!favorite) {
                      setOpenFavorite(true);
                      handleClick(TransitionUp);
                    }
                    handleAddToFavorites();
                    handleFavorite();
                  }}
                  sx={buttonStyle}
                >
                  {t("favorite")}
                  <Checkbox
                    sx={{ marginLeft: "-5px" }}
                    {...label}
                    icon={<FavoriteBorder color="secondary" />}
                    checkedIcon={<Favorite color="secondary" />}
                    checked={favorite}
                  />
                </Button>
              </Tooltip>
              {disabled ? (
                <Button
                  variant="contained"
                  color="success"
                  aria-label="add to shopping cart"
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
                  aria-label="add to shopping cart"
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
                    aria-label="add to shopping cart"
                    onClick={() => {
                      handleClick(TransitionUp);
                      setOpenCart(true);
                      addItem(item);
                      disableButton();
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
          </Card>
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
            <Alert onClose={() => setOpenFavorite(false)} severity="success">
              {t("AddedToFavorites")}
            </Alert>
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
            <Alert onClose={() => setOpenCart(false)} severity="success">
              {t("addedToCart")}
            </Alert>
          </Snackbar>
        )}
      </>
    );
  }
);
