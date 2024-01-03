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
import Box from "@mui/material/Box";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { useSelector } from "react-redux";
import Rating from "@mui/material/Rating";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface State extends SnackbarOrigin {
  open: boolean;
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

  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const [value, setValue] = React.useState<number | null>(shopData.id);

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
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{ pl: 2 }}
          />
          <CardActions disableSpacing>
            <Checkbox
              {...label}
              icon={<FavoriteBorder color="error" />}
              checkedIcon={<Favorite color="error" />}
            />
            <IconButton
              color="success"
              aria-label="add to shopping cart"
              onClick={handleClick({
                vertical: "bottom",
                horizontal: "right",
              })}
            >
              <AddShoppingCartIcon />
            </IconButton>
            <ExpandMore
              expand={expanded[index]}
              onClick={() => handleExpandClick(index)}
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
      <Box sx={{ width: "100%" }}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message={t("addedToCart")}
          key={vertical + horizontal}
          autoHideDuration={3000}
        />
      </Box>
    </>
  );
};

export default StorePageCard;
