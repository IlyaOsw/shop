import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const Logos: React.FC = React.memo(() => {
  const { t } = useTranslation();
  const logoStyle = {
    height: "70px",
    width: "130px",
    marginTop: "30px",
  };
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
        <img
          style={logoStyle}
          src={`${process.env.PUBLIC_URL}/Images/Logos/samsung.svg`}
        />
        <img
          style={logoStyle}
          src={`${process.env.PUBLIC_URL}/Images/Logos/apple.svg`}
        />
        <img
          style={logoStyle}
          src={`${process.env.PUBLIC_URL}/Images/Logos/lenovo.svg`}
        />
        <img
          style={logoStyle}
          src={`${process.env.PUBLIC_URL}/Images/Logos/xiaomi.svg`}
        />
        <img
          style={logoStyle}
          src={`${process.env.PUBLIC_URL}/Images/Logos/sony.svg`}
        />
        <img
          style={logoStyle}
          src={`${process.env.PUBLIC_URL}/Images/Logos/huawei.svg`}
        />
      </Box>
    </>
  );
});
