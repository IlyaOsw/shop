import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Stack, IconButton, Box } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import styles from "./FooterContacts.module.scss";
import { t } from "i18next";

const FooterContacts: React.FC = () => {
  enum Contacts {
    LOCATION = "location",
    PHONE = "phone",
    MAIL = "mail",
  }
  const contacts: {
    id: number;
    label: Contacts;
    name: string;
    link: string;
  }[] = [
    {
      id: 1,
      label: Contacts.LOCATION,
      name: "location",
      link: "https://www.google.com/maps/place/%D0%A2%D0%B0%D1%80%D1%82%D1%83/@58.3752523,26.6503333,12z/data=!4m6!3m5!1s0x46eb36d8d55d3df7:0x400b36d18fc6d10!8m2!3d58.377983!4d26.7290383!16zL20vMDdzYjE?entry=ttu",
    },
    {
      id: 2,
      label: Contacts.PHONE,
      name: "+372 5349 4177",
      link: "tel:+37253494177",
    },
    {
      id: 3,
      label: Contacts.MAIL,
      name: "ossipov@gmail.com",
      link: "mailto: ossipov96@gmail.com",
    },
  ];
  const icons = [
    <LocationOnIcon fontSize="large" color="action" />,
    <LocalPhoneIcon fontSize="large" color="action" />,
    <EmailIcon fontSize="large" color="action" />,
  ];
  const getContacts = () =>
    contacts.map((item, index) => (
      <Box key={item.id} className={styles.contacts}>
        <Stack alignItems="center" spacing={1}>
          <IconButton aria-label="homeicon" size="large">
            {icons[index]}
          </IconButton>
        </Stack>
        <a href={item.link} className={styles.links}>
          {t(item.name)}
        </a>
      </Box>
    ));
  return <>{getContacts()}</>;
};

export default FooterContacts;
