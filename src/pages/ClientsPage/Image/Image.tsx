import { Box, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Image: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Paper
        elevation={6}
        sx={{
          mt: 5,
          position: "relative",
          height: "500px",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/Images/Clients/clientsImage.jpg`}
          alt="clientsImage"
          style={{
            objectFit: "cover",
            maxHeight: "100%",
            width: "100%",
            height: "100%",
          }}
        />
      </Paper>
      <Typography sx={{ textAlign: "center", mt: 2 }}>
        {t("building")}
      </Typography>
    </Box>
  );
};
