import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Divider, Typography } from "@mui/material";

import { LogoLabel } from "../../../types/types";

const logoImages: { id: number; label: LogoLabel }[] = [
  { id: 0, label: LogoLabel.SAMSUNG },
  { id: 1, label: LogoLabel.GIGABYTE },
  { id: 2, label: LogoLabel.LENOVO },
  { id: 3, label: LogoLabel.INTEL },
  { id: 4, label: LogoLabel.PHILIPS },
  { id: 5, label: LogoLabel.ASUS },
];

export const Partners: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {t("ourPartners")}
      </Typography>
      <Divider sx={{ m: 2 }} color="lightgray" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "20px 0px",
          position: "relative",
        }}
      >
        {logoImages.map((logo) => (
          <img
            key={logo.id}
            style={{ height: "70px", width: "130px", marginTop: "30px" }}
            src={`${process.env.PUBLIC_URL}/Images/Logos/${logo.label}.svg`}
            alt={logo.label}
          />
        ))}
      </Box>
    </>
  );
};
