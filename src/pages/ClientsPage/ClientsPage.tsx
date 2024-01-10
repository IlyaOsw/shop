import React from "react";
import styles from "./ClientsPage.module.scss";
import Clients from "./Clients/Clients";
import { Box } from "@mui/material";

const ClientsPage: React.FC = () => {
  return (
    <Box className={styles.test}>
      <Clients />
    </Box>
  );
};

export default ClientsPage;
