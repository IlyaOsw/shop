import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Divider, Typography } from "@mui/material";

import { Images } from "./Images/Images";
import { NewsItem } from "./NewsItem/NewsItem";
import { Subscribe } from "./Subscribe/Subscribe";

const News: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h5" align="center" sx={{ m: 3 }}>
        {t("newsTitle")}
      </Typography>
      <Divider sx={{ m: 2 }} color="lightgray" />
      <Images />
      <Typography align="center" sx={{ p: 2, margin: "50px auto" }}>
        {t("newsDesc")}
      </Typography>
      <Subscribe />
      <NewsItem />
    </Container>
  );
};

export default News;
