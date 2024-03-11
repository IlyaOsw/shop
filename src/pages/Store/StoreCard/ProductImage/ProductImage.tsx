import {
  CardMedia,
  Modal,
  Backdrop,
  Fade,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { CloseButton } from "../../../../components/CloseButton/CloseButton";
import { ProductPropsType } from "../../../../types/types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "25px",
};

export const ProductImage: React.FC<ProductPropsType> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CardMedia
        component="img"
        image={`${process.env.PUBLIC_URL}/Images/Store/${item.description}.jpg`}
        alt={item.title}
        sx={{
          margin: "0 auto",
          width: "85%",
          height: "370px",
          objectFit: "contain",
          cursor: "pointer",
        }}
        onClick={handleOpen}
      />
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <CloseButton onClose={handleClose} />
              <Box textAlign="center">
                <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                  {item.title}
                </Typography>
                <img
                  style={{ width: "300px", height: "350px" }}
                  src={`${process.env.PUBLIC_URL}/Images/Store/${item.description}.jpg`}
                  alt={`${item.description}`}
                />
              </Box>
            </Box>
          </Fade>
        </Modal>
      )}
    </>
  );
};
