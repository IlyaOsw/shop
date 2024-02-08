import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Divider, Paper, Typography } from "@mui/material";

import { Carousel } from "./Carousel/Carousel";
import { News } from "./News/News";

const NewsPage: React.FC = React.memo(() => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <Typography variant="h5" textAlign={"center"} sx={{ m: 3 }}>
        {t("newsTitle")}
      </Typography>
      <Divider sx={{ m: 2 }} />
      <Carousel />
      <Paper
        elevation={6}
        sx={{
          position: "relative",
          margin: "50px auto",
        }}
      >
        <Typography variant="body1" color="text.secondary" sx={{ p: 2 }}>
          {t("newsDesc")}
        </Typography>
      </Paper>
      <News />
    </Container>
  );
});

export default NewsPage;
