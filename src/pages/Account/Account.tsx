import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";

import { Information } from "./Information/Information";
import { Image } from "./Image/Image";

const Account: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h5" align="center" sx={{ mt: 3 }}>
        {t("accountSettings")}
      </Typography>
      <Box
        sx={{
          mt: 5,
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Image />
        <Information />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          m: 5,
        }}
      >
        <Button variant="contained" sx={{ borderRadius: "25px" }} color="info">
          {t("saveChanges")}
        </Button>
      </Box>
    </Container>
  );
};

export default Account;
