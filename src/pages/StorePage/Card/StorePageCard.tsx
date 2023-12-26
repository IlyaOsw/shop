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
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import styles from "./StorePageCard.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
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

enum PhoneDescription {
  IPHONE15PROMAX = "iphone15promax",
  APPLEWATCH8 = "applewatch8",
  AIRPODS3 = "airpods3",
  IPHONE14PROMAX = "iphone14promax",
  APPLEWATCH9 = "applewatch9",
  AIRPODS2GEN = "airpods2gen",
  APPLEWATCHULTRA = "applewatchultra",
  IPHONE15 = "iphone15",
  GOOGLEPIXEL = "googlepixel",
  IPHONE13PRO = "iphone13pro",
  GALAXYFLIP = "galaxyflip",
}
export const accessories: {
  id: number;
  title: string;
  price: string;
  description: PhoneDescription;
}[] = [
  {
    id: 0,
    title: "Apple iPhone 15 Pro Max 256GB",
    price: "1489.00 €",
    description: PhoneDescription.IPHONE15PROMAX,
  },
  {
    id: 1,
    title: "Apple Watch Series 8 GPS/LTE 45mm",
    price: "649.00 €",
    description: PhoneDescription.APPLEWATCH8,
  },
  {
    id: 2,
    title: "Apple AirPods with Lightning",
    price: "199.00 €",
    description: PhoneDescription.AIRPODS3,
  },
  {
    id: 3,
    title: "Apple iPhone 14 Pro Max 1TB",
    price: "1649.00 €",
    description: PhoneDescription.IPHONE14PROMAX,
  },
  {
    id: 4,
    title: "Apple Watch Series 9 GPS/LTE 45mm",
    price: "899.00 €",
    description: PhoneDescription.APPLEWATCH9,
  },
  {
    id: 5,
    title: "Apple iPhone 15 128GB",
    price: "949.00 €",
    description: PhoneDescription.IPHONE15,
  },
  {
    id: 6,
    title: "Apple AirPods Pro 2nd gen",
    price: "279.00 €",
    description: PhoneDescription.AIRPODS2GEN,
  },
  {
    id: 7,
    title: "Apple Watch Ultra 2 GPS/LTE 49mm",
    price: "869.00 €",
    description: PhoneDescription.APPLEWATCHULTRA,
  },
  {
    id: 8,
    title: "Apple iPhone 15 128GB",
    price: "949.00 €",
    description: PhoneDescription.IPHONE15,
  },
  {
    id: 9,
    title: "Google Pixel Watch LTE",
    price: "449.00 €",
    description: PhoneDescription.GOOGLEPIXEL,
  },
  {
    id: 10,
    title: "Apple iPhone 13 Pro 128GB",
    price: "799.00 €",
    description: PhoneDescription.IPHONE13PRO,
  },
  {
    id: 11,
    title: "Samsung Galaxy Flip5 5G",
    price: "827.00 €",
    description: PhoneDescription.GALAXYFLIP,
  },
];

const getCards = () => {
  const { t } = useTranslation();

  const [expanded, setExpanded] = React.useState(
    new Array(accessories.length).fill(false)
  );

  const handleExpandClick = (index: number) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };
  return accessories.map((item, index) => (
    <Card sx={{ maxWidth: 300 }} className={styles.card} key={item.id}>
      <Link to={`/${item.description}`} className={styles.link}>
        <CardMedia
          component="img"
          height="100%"
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
            {item.price}
          </Typography>
        </CardContent>
      </Link>
      <CardActions disableSpacing>
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
        <Checkbox
          {...label}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
        />
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
  ));
};

const StorePage = () => {
  return <>{getCards()}</>;
};

export default StorePage;
