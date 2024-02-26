import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Divider, Typography } from "@mui/material";

import { Cards } from "./Cards/Cards";
import { Description } from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import { About } from "./About/About";
import { Partners } from "./Partners/Partners";
import { Products } from "./Products/Products";

const MainPage: React.FC = React.memo(() => {
  const { t } = useTranslation();

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h5" sx={{ m: 3, textAlign: "center" }}>
        {t("welcome")}
      </Typography>
      <Divider sx={{ m: 2 }} color="lightgray" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Cards />
      </Box>
      <Description />
      <Partners />
      <Products />
      <About />
      <Feedback />
    </Container>
  );
});

export default MainPage;
