import React from "react";
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

import { CloseButton } from "../CloseButton/CloseButton";
import { useCart } from "../../hooks/useCart";

const ccyFormat = (num: number) => `${num.toFixed(2)}`;

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
};

export const ShopCart: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  //@ts-ignore
  const { cart, removeItem, disableCartButton } = useCart();
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState<number | null>(null);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const total = (items: any) => {
    return items.reduce((acc: number, item: { price: number }) => {
      return acc + item.price;
    }, 0);
  };

  const invoiceTotal = total(cart);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  const handleCloseModal = () => setOpenModal(null);

  const handleOpenModal = (itemId: number) => setOpenModal(itemId);

  return (
    <>
      <Tooltip title={t("cart")} arrow>
        <IconButton aria-label="homeicon" size="large" onClick={handleOpen}>
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCartIcon fontSize="large" color="action" />
          </Badge>
        </IconButton>
      </Tooltip>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="responsive-dialog-title"
      >
        <Box sx={{ p: 2 }}>
          <CloseButton onClose={handleClose} />
        </Box>
        <DialogTitle
          id="responsive-dialog-title"
          sx={{ m: 1, textAlign: "center", fontSize: "24px" }}
        >
          {t("cart")}
        </DialogTitle>
        <Divider sx={{ m: 2 }} />
        <DialogContent>
          <Paper elevation={3}>
            <Table aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell
                    colSpan={2}
                    sx={{ fontSize: "20px", textAlign: "start" }}
                  >
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
                    isFavorite: boolean;
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
                            open={true}
                            onClose={handleCloseModal}
                            aria-labelledby="modal-modal-title"
                            sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                            hideBackdrop
                          >
                            <Box sx={style}>
                              <Typography
                                id="modal-modal-title"
                                variant="h6"
                                sx={{
                                  textAlign: "center",
                                }}
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
                          </Modal>
                        )}
                      </TableCell>
                    </TableRow>
                  )
                )}
                <TableRow>
                  <TableCell colSpan={3} sx={{ fontSize: "18px" }}>
                    {t("total")}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "18px" }}>
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
