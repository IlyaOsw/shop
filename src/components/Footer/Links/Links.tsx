import React from "react";
import styles from "./Links.module.scss";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

enum SocialLinks {
  LINKEDIN = "Linkedin",
  FACEBOOK = "Facebook",
  INSTAGRAM = "Instagram",
  GITHUB = "Github",
}
const links: { id: number; url: string; label: SocialLinks }[] = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/ilyaosw/",
    label: SocialLinks.LINKEDIN,
  },
  {
    id: 2,
    url: "https://www.facebook.com/ilyaosw",
    label: SocialLinks.FACEBOOK,
  },
  {
    id: 3,
    url: "https://www.instagram.com/ilya_osw/",
    label: SocialLinks.INSTAGRAM,
  },
  {
    id: 4,
    url: "https://github.com/IlyaOsw",
    label: SocialLinks.GITHUB,
  },
];

const FooterLinks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box className={styles.links}>
      <Typography className={styles.follow}>{t("Follow")}</Typography>
      {links.map((link) => (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="me-3"
          key={link.id}
        >
          <img
            src={
              process.env.PUBLIC_URL + `/Images/FollowSvgs/${link.label}.svg`
            }
            alt={`${link.label} icon`}
            className={styles.social}
          />
        </a>
      ))}
    </Box>
  );
};

export default FooterLinks;
