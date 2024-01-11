import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormDialog from "../../components/FormDialog/FormDialog";
import { Box, Paper } from "@mui/material";
import Carousel from "./Carousel/Carousel";
import { useTranslation } from "react-i18next";

const NewsPage: React.FC = React.memo(() => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography
        variant="h4"
        textAlign={"center"}
        sx={{ m: 3, letterSpacing: "1px" }}
      >
        {t("newsTitle")}
      </Typography>
      <Box>
        <Carousel />
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "90%",
          margin: "25px auto",
        }}
      >
        <Paper elevation={4}>
          <Typography variant="h6" sx={{ p: 2 }}>
            {t("newsDesc")}
          </Typography>
        </Paper>
      </Box>
      <Card sx={{ maxWidth: "100%", m: 2 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <FormDialog />
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
});

export default NewsPage;
