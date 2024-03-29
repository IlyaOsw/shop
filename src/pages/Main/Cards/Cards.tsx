import React from "react";
import { t } from "i18next";
import Card from "@mui/material/Card";
import { Paper } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const cards: { id: number; label: string; description: string }[] = [
  { id: 0, label: "Card1", description: "cardInfo1" },
  { id: 1, label: "Card2", description: "cardInfo2" },
];

export const Cards: React.FC = () => {
  return (
    <>
      {cards.map((item) => (
        <Paper elevation={3} key={item.id} sx={{ mt: 3 }}>
          <Link
            to={"/news"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card
              sx={{
                position: "relative",
                maxWidth: "730px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="500"
                  src={`${process.env.PUBLIC_URL}/Images/MainPageImages/${item.label}.jpg`}
                  alt={item.label}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {t(item.label)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t(item.description)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Paper>
      ))}
    </>
  );
};
