import styles from "./StorePage.module.scss";
import Box from "@mui/material/Box";
import Card from "./Card/Card";

export default function StorePage() {
  return (
    <Box className={styles.container}>
      <Card />
    </Box>
  );
}
