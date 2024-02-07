import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Footer.module.scss";
import { Contacts } from "./Contacts/Contacts";
import { Links } from "./Links/Links";

export const Footer: React.FC = () => {
  return (
    <Box className={styles.footer}>
      <Contacts />
      <Links />
      <Typography className={styles.copyright}>
        2023 Made by Ilja Ossipov. ©
      </Typography>
    </Box>
  );
};
