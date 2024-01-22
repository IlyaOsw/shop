import Box from "@mui/material/Box";
import StoreCard, { Media } from "./StoreCard/StoreCard";
import Skeleton from "@mui/material/Skeleton";
import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Container, Typography } from "@mui/material";
import Filter from "./Filter/Filter";

export interface StoreCardProps {
  item: {
    id: number;
    title: string;
    price: number;
    description: string;
  };
  index: number;
}

const StorePage: React.FC = React.memo(() => {
  const { t } = useTranslation();
  const shopData = useSelector((state: any) => state.shopPage);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (shopData && shopData.length > 0) {
      setIsLoading(false);
    }
  }, [shopData]);

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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {shopData.map((item: StoreCardProps["item"], index: number) => {
          if (isLoading) {
            return (
              <Media loading key={index}>
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  sx={{ height: 400, width: 335, maxWidth: "40vh" }}
                />
                <Skeleton animation="wave" height={50} />
                <Skeleton animation="wave" height={50} width="50%" />
              </Media>
            );
          } else {
            return <StoreCard key={item.id} item={item} index={index} />;
          }
        })}
      </Box>
    </Container>
  );
});
export default StorePage;
