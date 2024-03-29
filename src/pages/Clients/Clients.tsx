import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Divider, Typography } from "@mui/material";

import { Timer } from "../../components/Timer/Timer";

import { Client } from "./Client/Client";
import { Image } from "./Image/Image";
import { CustomStepper } from "./CustomStepper/CustomStepper";

const Clients: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h5" align="center" sx={{ m: 3 }}>
        {t("clientsTitle")}
      </Typography>
      <Divider sx={{ m: 2 }} color="lightgray" />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            maxWidth: "500px",
            textAlign: "center",
          }}
        >
          <Typography>{t("clientsSubTitle")}</Typography>
          <Typography sx={{ mt: 5, mb: 5 }}>{t("clientsSubTitle2")}</Typography>
          <Typography>{t("clientsSubTitle3")}</Typography>
        </Box>
        <Image />
      </Box>
      <Timer />
      <CustomStepper />
      <Client />
    </Container>
  );
};

export default Clients;
