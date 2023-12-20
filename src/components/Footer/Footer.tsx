import React from "react";
import styles from "./Footer.module.scss";
import FooterLinks from "./FooterLinks/FooterLinks";
import { Box, Typography } from "@mui/material";
import FooterContacts from "./FooterContact/FooterContacts";

const Footer: React.FC = () => {
  return (
    <Box className={styles.footer}>
      <FooterContacts />
      <FooterLinks />
      <Typography className={styles.copyright}>
        2023 Made by Ilja Ossipov. ©
      </Typography>
    </Box>
  );
};

export default Footer;
