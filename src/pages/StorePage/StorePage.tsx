import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Divider, Typography } from "@mui/material";

import { Filter } from "./Filter/Filter";

const StorePage: React.FC = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mb: 10 }}>
      <Typography
        variant="h5"
        textAlign={"center"}
        sx={{ m: 3, letterSpacing: "1px" }}
      >
        {t("storePage")}
      </Typography>
      <Divider sx={{ m: 2 }} color="lightgray" />
      <Filter />
    </Container>
  );
};
export default StorePage;
