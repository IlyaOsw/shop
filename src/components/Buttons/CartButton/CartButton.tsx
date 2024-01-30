import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CloseButton from "../CloseButton/CloseButton";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/Delete";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import { useCart } from "../../../hooks/useCart";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Divider } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const ccyFormat = (num: number) => {
  return `${num.toFixed(2)}`;
};

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
  pt: 2,
  px: 4,
  pb: 3,
};

export default function CartButton() {
  const { t } = useTranslation();

  //@ts-ignore
  const { cart, removeItem } = useCart();
  const invoiceTotal = total(cart);

  function total(items: any) {
    return items.reduce((acc: number, item: { price: number }) => {
      return acc + item.price;
    }, 0);
  }

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [openModal, setOpenModal] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  return (
    <>
      <Tooltip title={t("cart")} arrow>
        <IconButton aria-label="homeicon" size="large" onClick={handleOpen}>
          <Badge badgeContent={cart.length} color="secondary">
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
                  <TableCell align="center" sx={{ fontSize: "20px" }}>
                    {t("price")}
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((row: any) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.title}</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">{ccyFormat(row.price)}€</TableCell>
                    <TableCell align="right">
                      <Tooltip title={t("delete")}>
                        <IconButton
                          aria-label="delete"
                          color="secondary"
                          onClick={handleOpenModal}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    {openModal && (
                      <Modal
                        open={openModal}
                        onClose={handleCloseModal}
                        aria-labelledby="modal-modal-title"
                        sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
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
                            {t("confrimDelete")}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-around",
                              mt: 2,
                            }}
                          >
                            <Button
                              variant="outlined"
                              onClick={handleCloseModal}
                            >
                              {t("no")}
                            </Button>
                            <Button
                              variant="outlined"
                              onClick={() => {
                                removeItem(row.id);
                                handleCloseModal();
                              }}
                            >
                              {t("yes")}
                            </Button>
                          </Box>
                        </Box>
                      </Modal>
                    )}
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={2} sx={{ fontSize: "18px" }}>
                    {t("total")}
                  </TableCell>
                  <TableCell></TableCell>
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
}
