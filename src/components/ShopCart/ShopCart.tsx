import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Badge from "@mui/material/Badge";
import { TransitionProps } from "@mui/material/transitions";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { Backdrop, Fade } from "@mui/material";

import { CloseButton } from "../CloseButton/CloseButton";
import { useCart } from "../../hooks/useCart";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  p: 5,
  borderRadius: "25px",
};

export const ShopCart: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  //@ts-ignore
  const { cart, removeItem, disableCartButton } = useCart();
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState<number | null>(null);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const total = (items: any) => {
    return items.reduce((acc: number, item: { price: number }) => {
      return acc + item.price;
    }, 0);
  };

  const ccyFormat = (num: number) => `${num.toFixed(2)}`;

  const invoiceTotal = total(cart);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleCloseModal = () => setOpenModal(null);
  const handleOpenModal = (itemId: number) => setOpenModal(itemId);

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
          <Paper elevation={3}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2} sx={{ fontSize: "20px" }}>
                    {t("details")}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "20px" }}>
                    {t("price")}
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map(
                  (row: {
                    id: number;
                    title: string;
                    price: number;
                    description: string;
                  }) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <img
                          style={{ height: "50px", width: "40px" }}
                          src={`${process.env.PUBLIC_URL}/Images/Store/${row.description}.jpg`}
                          alt={row.description}
                        />
                      </TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell align="right">
                        {ccyFormat(row.price)}€
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip title={t("delete")}>
                          <IconButton
                            aria-label="delete"
                            color="error"
                            onClick={() => handleOpenModal(row.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                        {openModal === row.id && (
                          <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
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
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  align="center"
                                >
                                  {t("confrimDelete")} {row.title}?
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    m: 2,
                                  }}
                                >
                                  <img
                                    style={{
                                      height: "100px",
                                      width: "80px",
                                    }}
                                    src={`${process.env.PUBLIC_URL}/Images/Store/${row.description}.jpg`}
                                    alt={row.description}
                                  />
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    mt: 4,
                                  }}
                                >
                                  <Button
                                    variant="outlined"
                                    onClick={handleCloseModal}
                                    color="primary"
                                    sx={{ borderRadius: "25px" }}
                                  >
                                    {t("cancel")}
                                  </Button>
                                  <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => {
                                      removeItem(row.id);
                                      handleCloseModal();
                                      disableCartButton(row.id, false);
                                    }}
                                    sx={{ borderRadius: "25px" }}
                                  >
                                    {t("delete")}
                                  </Button>
                                </Box>
                              </Box>
                            </Fade>
                          </Modal>
                        )}
                      </TableCell>
                    </TableRow>
                  )
                )}
                <TableRow>
                  <TableCell colSpan={3} sx={{ fontSize: "22px" }}>
                    {t("total")}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "22px" }}>
                    {ccyFormat(invoiceTotal)}€
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </DialogContent>
      </Dialog>
    </>
  );
};
