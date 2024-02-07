import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";

enum LogoLabel {
  SAMSUNG = "samsung",
  APPLE = "apple",
  LENOVO = "lenovo",
  XIAOMI = "xiaomi",
  SONY = "sony",
  HUAWEI = "huawei",
}

const logoImages: { id: number; label: LogoLabel }[] = [
  { id: 0, label: LogoLabel.SAMSUNG },
  { id: 1, label: LogoLabel.APPLE },
  { id: 2, label: LogoLabel.LENOVO },
  { id: 3, label: LogoLabel.XIAOMI },
  { id: 4, label: LogoLabel.SONY },
  { id: 5, label: LogoLabel.HUAWEI },
];

export const Logos: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {t("ourPartners")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
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
          />
        ))}
      </Box>
    </>
  );
};
