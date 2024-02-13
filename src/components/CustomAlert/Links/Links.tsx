import React from "react";
import { Box, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

import { SocialLinks } from "../../../types/types";

import styles from "./Links.module.scss";

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

export const Links: React.FC = () => {
  return (
    <Box className={styles.links}>
      {links.map((link) => (
        <Tooltip title={link.label} key={link.id}>
          <Link
            to={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
          >
            <img
              src={
                process.env.PUBLIC_URL + `/Images/FollowSvgs/${link.label}.svg`
              }
              alt={`${link.label} icon`}
              className={styles.social}
            />
          </Link>
        </Tooltip>
      ))}
    </Box>
  );
};
