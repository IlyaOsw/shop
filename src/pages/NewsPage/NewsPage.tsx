import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Paper } from "@mui/material";
import Carousel from "./Carousel/Carousel";
import { useTranslation } from "react-i18next";
import News from "./News/News";

const NewsPage: React.FC = React.memo(() => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" textAlign={"center"} sx={{ m: 3 }}>
        {t("newsTitle")}
      </Typography>
      <Box>
        <Carousel />
      </Box>
      <Box
        sx={{
          position: "relative",
          margin: "50px auto",
        }}
      >
        <Paper elevation={4}>
          <Typography variant="h6" sx={{ p: 2 }}>
            {t("newsDesc")}
          </Typography>
        </Paper>
      </Box>
      <News />
    </Container>
  );
});

export default NewsPage;