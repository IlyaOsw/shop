import styles from "./StorePage.module.scss";
import Box from "@mui/material/Box";
import Card, { Media } from "./Card/Card";
import Skeleton from "@mui/material/Skeleton";
import React from "react";
import { useSelector } from "react-redux";

export default function StorePage() {
  const shopData = useSelector((state: any) => state.shopPage);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (shopData && shopData.length > 0) {
      setIsLoading(false);
    }
  }, [shopData]);

  return (
    <Box className={styles.container}>
      {shopData.map((item: any, index: number) => {
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
          return <Card key={item.id} />;
        }
      })}
    </Box>
  );
}
