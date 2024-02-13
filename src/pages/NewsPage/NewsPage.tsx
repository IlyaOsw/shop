import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Divider, Typography } from "@mui/material";

import { Carousel } from "./Carousel/Carousel";
import { News } from "./News/News";
import { Subscribe } from "./Subscribe/Subscribe";

const NewsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <Typography variant="h5" textAlign={"center"} sx={{ m: 3 }}>
        {t("newsTitle")}
      </Typography>
      <Divider sx={{ m: 2 }} color="lightgray" />
      <Carousel />
      <Typography variant="body1" sx={{ p: 2, margin: "50px auto" }}>
        {t("newsDesc")}
      </Typography>
      <Subscribe />
      <News />
    </Container>
  );
};

export default NewsPage;
