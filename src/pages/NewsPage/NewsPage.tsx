import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Divider, Typography } from "@mui/material";

import { Carousel } from "./Carousel/Carousel";
import { News } from "./News/News";

const NewsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <Typography variant="h5" textAlign={"center"} sx={{ m: 3 }}>
        {t("newsTitle")}
      </Typography>
      <Divider sx={{ m: 2 }} />
      <Carousel />
      <Typography variant="body1" sx={{ p: 2, margin: "50px auto" }}>
        {t("newsDesc")}
      </Typography>
      <News />
    </Container>
  );
};

export default NewsPage;
