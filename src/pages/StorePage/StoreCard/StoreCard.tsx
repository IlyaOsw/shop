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
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Slide, { SlideProps } from "@mui/material/Slide";
import Tooltip from "@mui/material/Tooltip";
import { Box, Button, Paper } from "@mui/material";
import { useCart } from "../../../hooks/useCart";
import DoneIcon from "@mui/icons-material/Done";
import { StoreCardProps } from "../Filter/Filter";

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

export const StoreCard: React.FC<StoreCardProps> = React.memo(
  ({ item, toggleFavorite }) => {
    const { t } = useTranslation();
    //@ts-ignore
    const { addItem } = useCart();

    const [, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState<
      React.ComponentType<TransitionProps> | undefined
    >(undefined);

    const handleClick =
      (Transition: React.ComponentType<TransitionProps>) => () => {
        setTransition(() => Transition);
        setOpen(true);
      };

    const [openCart, setOpenCart] = React.useState(false);
    const [openFavorite, setOpenFavorite] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);

    const disableButton = () => setDisabled(true);

    const handleAddToFavorites = () => toggleFavorite(item.id);

    const [favorite, setFavorite] = React.useState(false);
    const handleFavorite = () => setFavorite((prev) => !prev);

    return (
      <>
        <Paper elevation={3} sx={{ m: 3 }}>
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
              sx={{
                width: "100%",
                height: "400px",
                objectFit: "contain",
              }}
            />
            <CardContent
              sx={{
                height: "95px",
              }}
            >
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
                height: "100px",
              }}
            >
              <Tooltip title={t("addToFavorites")} arrow placement="top">
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
                  sx={{ height: "35px", width: "100%" }}
                >
                  {t("favorite")}
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder color="secondary" />}
                    checkedIcon={<Favorite color="secondary" />}
                    checked={favorite}
                  />
                </Button>
              </Tooltip>
              {disabled ? (
                <Button
                  variant="outlined"
                  color="info"
                  aria-label="add to shopping cart"
                  sx={{ width: "100%", height: "35px" }}
                >
                  <Typography>{t("added")}</Typography>
                  <Box sx={{ paddingLeft: "5px" }}>
                    <DoneIcon />
                  </Box>
                </Button>
              ) : (
                <Tooltip title={t("addToCart")} arrow>
                  <Button
                    variant="outlined"
                    color="success"
                    aria-label="add to shopping cart"
                    onClick={() => {
                      handleClick(TransitionUp);
                      setOpenCart(true);
                      addItem(item);
                      disableButton();
                    }}
                    sx={{ width: "100%", height: "35px" }}
                  >
                    <Typography>{t("add")}</Typography>
                    <Box sx={{ paddingLeft: "5px", paddingTop: "8px" }}>
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
