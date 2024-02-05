import React from "react";
import styles from "./Footer.module.scss";
import { Links } from "./Links/Links";
import { Box, Typography } from "@mui/material";
import { Contacts } from "./Contacts/Contacts";

const Footer: React.FC = () => {
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

export default Footer;
