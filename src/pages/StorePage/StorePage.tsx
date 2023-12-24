import styles from "./StorePage.module.scss";
import Box from "@mui/material/Box";
import StorePage from "./Card/StorePageCard";

export default function RecipeReviewCard() {
  return (
    <Box className={styles.container}>
      <StorePage />
    </Box>
  );
}
