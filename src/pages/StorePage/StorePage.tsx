import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography } from "@mui/material";
import Filter from "./Filter/Filter";

const StorePage: React.FC = React.memo(() => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h5"
        textAlign={"center"}
        sx={{ m: 3, letterSpacing: "1px" }}
      >
        {t("storePage")}
      </Typography>
      <Filter />
    </Container>
  );
});
export default StorePage;