import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Divider, Typography } from "@mui/material";

import { Cards } from "./Cards/Cards";
import { Description } from "./Description/Description";
import { Feedback } from "./Feedback/Feedback";
import { About } from "./About/About";
import { Partners } from "./Partners/Partners";
import { Products } from "./Products/Products";

const Main: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography align="center" variant="h5" sx={{ m: 3 }}>
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
};

export default Main;
