import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Divider, Typography } from "@mui/material";

import { Filter } from "./Filter/Filter";

const Store: React.FC = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h5" sx={{ m: 3, textAlign: "center" }}>
        {t("storePage")}
      </Typography>
      <Divider sx={{ m: 2 }} color="lightgray" />
      <Filter />
    </Container>
  );
};

export default Store;
