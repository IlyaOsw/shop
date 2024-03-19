import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { TransitionProps } from "@mui/material/transitions";
import Tooltip from "@mui/material/Tooltip";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { CloseButton } from "../CloseButton/CloseButton";
import { useCart } from "../../hooks/useCart";

import { Products } from "./Products/Products";
import { Empty } from "./Empty/Empty";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ShopCart: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  //@ts-ignore
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <Tooltip title={t("cart")} arrow>
        <IconButton onClick={handleOpen}>
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCartIcon fontSize="large" style={{ color: "#ffffff" }} />
          </Badge>
        </IconButton>
      </Tooltip>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
      >
        <Box sx={{ p: 2 }}>
          <CloseButton onClose={handleClose} />
        </Box>
        <DialogTitle align="center" sx={{ m: 1, fontSize: "24px" }}>
          {t("cart")}
        </DialogTitle>
        <Divider sx={{ m: 2 }} />
        <DialogContent>
          {cart.length > 0 ? (
            <Products open={open} handleClose={handleClose} />
          ) : (
            <Empty handleClose={handleClose} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
