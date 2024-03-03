import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import styles from "./ScrollToTop.module.scss";

export const ScrollToTop: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggle = (): void => {
    if (window.scrollY > 100) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <Box
      onClick={scrollToTop}
      className={`${styles.scrollBtn} ${isHidden ? styles.hidden : ""}`}
    >
      <Box sx={{ ml: 0.3 }}>
        <KeyboardArrowUpIcon fontSize="large" />
      </Box>
    </Box>
  );
};
