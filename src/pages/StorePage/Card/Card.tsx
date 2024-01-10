import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import styles from "./Card.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Snackbar from "@mui/material/Snackbar";
import { useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Slide, { SlideProps } from "@mui/material/Slide";

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

const StorePageCard = () => {
  const { t } = useTranslation();

  const shopData = useSelector((state: any) => state.shopPage);

  const [expanded, setExpanded] = React.useState(
    new Array(shopData.length).fill(false)
  );

  const handleExpandClick = (index: number) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const [value, setValue] = React.useState<number | null>(shopData.id);

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
      {shopData.map((item: any, index: number) => (
        <Card className={styles.card} key={item.id}>
          <Link to={`/${item.description}`} className={styles.link}>
            <CardMedia
              component="img"
              image={`${process.env.PUBLIC_URL}/Images/Store/${item.description}.jpg`}
              alt="Phone"
              sx={{ p: 1 }}
            />
            <CardContent>
              <Typography variant="h6" color="text.secondary">
                {item.title}
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                className={styles.price}
              >
                {item.price} €
              </Typography>
            </CardContent>
          </Link>
          <CardActions disableSpacing>
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
            <ExpandMore
              expand={expanded[index]}
              onClick={() => {
                handleExpandClick(index);
              }}
              aria-expanded={expanded[index]}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{t(item.description)}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}

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
};

export default StorePageCard;
