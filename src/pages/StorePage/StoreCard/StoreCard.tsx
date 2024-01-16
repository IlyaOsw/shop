import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import styles from "./StoreCard.module.scss";
import { useTranslation } from "react-i18next";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Snackbar from "@mui/material/Snackbar";
import { useSelector } from "react-redux";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Slide, { SlideProps } from "@mui/material/Slide";
import Tooltip from "@mui/material/Tooltip";
import { ShopType } from "../../../redux/reducers/shop-reducer";
import { StoreCardProps } from "../StorePage";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

type TransitionProps = Omit<SlideProps, "direction">;

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
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

  const shopData = useSelector(
    (state: { shopPage: ShopType }) => state.shopPage
  );

  const [expanded, setExpanded] = React.useState(
    new Array(shopData.length).fill(false)
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
      <Card className={styles.card} key={item.id} sx={{ m: 5 }}>
        <CardMedia
          component="img"
          image={`${process.env.PUBLIC_URL}/Images/Store/${item.description}.jpg`}
          alt="Phone"
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            {item.title}
          </Typography>
          <Typography
            variant="h5"
            color="text.primary"
            sx={{
              position: "absolute",
              bottom: "11%",
              left: "5%",
            }}
          >
            {item.price} €
          </Typography>
        </CardContent>

        <CardActions
          disableSpacing
          sx={{
            position: "absolute",
            bottom: "1%",
            right: "1%",
          }}
        >
          <Tooltip title={t("addToFavorites")} arrow>
            <Checkbox
              {...label}
              icon={<FavoriteBorder color="error" />}
              checkedIcon={<Favorite color="error" />}
              onClick={() => {
                const isCurrentlyFavorite = favorites[index];
                toggleFavorite(index);
                if (!isCurrentlyFavorite) {
                  setOpenFavorite(true);
                  handleClick(TransitionUp);
                }
              }}
              checked={favorites[index]}
            />
          </Tooltip>
          <Tooltip title={t("addToCart")} arrow>
            <IconButton
              color="success"
              aria-label="add to shopping cart"
              onClick={() => {
                handleClick(TransitionUp);
                setOpenCart(true);
              }}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
        <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{t(item.description)}</Typography>
          </CardContent>
        </Collapse>
      </Card>

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
