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
  IPHONE14PROMAX = "iphone14promax",
  IPHONE12PROMAX = "iphone12promax",
  IPHONE15 = "iphone15",
}
const phones: {
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
    title: "Apple iPhone 14 Pro Max 1TB",
    price: "1649.00 €",
    description: PhoneDescription.IPHONE14PROMAX,
  },

  {
    id: 2,
    title: "Apple iPhone 12 Pro 128GB",
    price: "599.00 €",
    description: PhoneDescription.IPHONE12PROMAX,
  },
  {
    id: 3,
    title: "Apple iPhone 15 128GB",
    price: "949.00 €",
    description: PhoneDescription.IPHONE15,
  },
];

const getPhones = () => {
  const { t } = useTranslation();

  const [expanded, setExpanded] = React.useState(
    new Array(phones.length).fill(false)
  );

  const handleExpandClick = (index: number) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };
  return phones.map((item, index) => (
    <Card sx={{ maxWidth: 300 }} className={styles.card} key={item.id}>
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
  return <>{getPhones()}</>;
};

export default StorePage;
