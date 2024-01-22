import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useTranslation } from "react-i18next";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Snackbar from "@mui/material/Snackbar";
import { useSelector } from "react-redux";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Slide, { SlideProps } from "@mui/material/Slide";
import Tooltip from "@mui/material/Tooltip";
import { ShopType } from "../../../redux/reducers/shop-reducer";
import { StoreCardProps } from "../StorePage";
import { Box, Button, Paper } from "@mui/material";
import { useCart } from "../../../hooks/useCart";

type TransitionProps = Omit<SlideProps, "direction">;

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

export function Media(props: any) {
  const { loading = false, children } = props;

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      {loading ? <>{children}</> : <>{children}</>}
    </Card>
  );
}

const StoreCard: React.FC<StoreCardProps> = React.memo(({ item, index }) => {
  const { t } = useTranslation();
  //@ts-ignore
  const { addItem } = useCart();

  const shopData = useSelector(
    (state: { shopPage: ShopType }) => state.shopPage
  );

  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleClick =
    (Transition: React.ComponentType<TransitionProps>) => () => {
      setTransition(() => Transition);
      setOpen(true);
    };

  const handleCloseCart = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenCart(false);
  };

  const [openCart, setOpenCart] = React.useState(false);
  const [openFavorite, setOpenFavorite] = React.useState(false);
  const [favorites, setFavorites] = React.useState(shopData.map(() => false));

  function toggleFavorite(index: number) {
    const updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavorites(updatedFavorites);
  }

  return (
    <>
      <Paper elevation={6} sx={{ m: 3 }}>
        <Card
          key={item.id}
          sx={{
            position: "relative",
            maxWidth: "300px",
          }}
        >
          <CardMedia
            component="img"
            image={`${process.env.PUBLIC_URL}/Images/Store/${item.description}.jpg`}
            alt="Phone"
          />
          <CardContent>
            <Typography variant="h6" color="text.secondary">
              {item.title}
            </Typography>
            <Typography variant="h5" color="text.primary">
              {item.price} €
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              flexWrap: "wrap",
            }}
          >
            <Tooltip title={t("addToFavorites")} arrow placement="top">
              <Button
                color="error"
                variant="outlined"
                onClick={() => {
                  const isCurrentlyFavorite = favorites[index];
                  toggleFavorite(index);
                  if (!isCurrentlyFavorite) {
                    setOpenFavorite(true);
                    handleClick(TransitionUp);
                  }
                }}
                sx={{ height: "35px", width: "100%" }}
              >
                {t("favorite")}
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder color="error" />}
                  checkedIcon={<Favorite color="error" />}
                  checked={favorites[index]}
                />
              </Button>
            </Tooltip>
            <Tooltip title={t("addToCart")} arrow>
              <Button
                variant="outlined"
                color="success"
                aria-label="add to shopping cart"
                onClick={() => {
                  handleClick(TransitionUp);
                  setOpenCart(true);
                  addItem(item);
                }}
                sx={{ width: "100%", marginTop: "5px", height: "35px" }}
              >
                <Typography>{t("add")}</Typography>
                <Box sx={{ paddingLeft: "5px" }}>
                  <AddShoppingCartIcon />
                </Box>
              </Button>
            </Tooltip>
          </CardActions>
        </Card>
      </Paper>
      {openFavorite && (
        <Snackbar
          open={openFavorite}
          autoHideDuration={3000}
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
          autoHideDuration={3000}
          onClose={handleCloseCart}
          TransitionComponent={transition}
          key={transition ? transition.name : ""}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Alert onClose={handleCloseCart} severity="success">
            {t("addedToCart")}
          </Alert>
        </Snackbar>
      )}
    </>
  );
});

export default StoreCard;
