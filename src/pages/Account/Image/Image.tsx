import { Box, Avatar } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useTranslation } from "react-i18next";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const Image: React.FC = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          const dataUrl = e.target.result as string;
          setSelectedImage(dataUrl);
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const avatarStyle = {
    width: "50vh",
    height: "50vh",
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.5)",
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 3,
      }}
    >
      {selectedImage ? (
        <Avatar style={avatarStyle} alt="Profile image" src={selectedImage} />
      ) : (
        <Avatar style={avatarStyle} />
      )}
      <Button
        sx={{ m: 4, borderRadius: "25px" }}
        color="info"
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        {t("uploadFile")}
        <VisuallyHiddenInput type="file" onChange={handleImageChange} />
      </Button>
    </Box>
  );
};
