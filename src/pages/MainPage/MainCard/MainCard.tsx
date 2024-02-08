import { t } from "i18next";
import React from "react";
import Card from "@mui/material/Card";
import { Paper } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

enum Cards {
  CARD1 = "Card1",
  CARD2 = "Card2",
}

const cards: { id: number; label: Cards; description: string }[] = [
  { id: 0, label: Cards.CARD1, description: "cardInfo1" },
  { id: 1, label: Cards.CARD2, description: "cardInfo2" },
];

export const MainCard: React.FC = () => {
  return (
    <>
      {cards.map((item) => (
        <Paper elevation={6} key={item.id} sx={{ mt: 1 }}>
          <Card
            sx={{
              position: "relative",
              maxWidth: "640px",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="500"
                src={`${process.env.PUBLIC_URL}/Images/MainPageImages/${item.label}.jpg`}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {t(item.label)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t(item.description)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>{" "}
        </Paper>
      ))}
    </>
  );
};
