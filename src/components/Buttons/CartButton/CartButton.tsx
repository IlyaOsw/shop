import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CloseButton from "../CloseButton/CloseButton";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./CartButton.module.scss";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  cursor: "default",
  borderRadius: "10px",
};

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

export default function CartButton() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cartData = useSelector((state: any) => state.cart);
  const invoiceTotal = total(cartData);
  function total(items: any) {
    const total = items.reduce(
      (acc: number, item: { price: number; qty: number }) => {
        return acc + item.price * item.qty;
      },
      0
    );
    return total;
  }

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton aria-label="homeicon" size="large" onClick={handleOpen}>
        <Badge badgeContent={cartData.length} color="secondary">
          <ShoppingCartIcon fontSize="large" color="action" />
        </Badge>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.cart}>
          {open && <CloseButton onClose={handleClose} />}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {t("cart")}
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={3}>
                    {t("details")}
                  </TableCell>
                  <TableCell align="right">{t("price")}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{t("description")}</TableCell>
                  <TableCell align="right">{t("quantity")}</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">{t("sum")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartData.map((row: any) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">
                      {ccyFormat(row.price)} €
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        id="delete"
                        startIcon={<DeleteIcon />}
                      >
                        {t("delete")}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={2}></TableCell>
                  <TableCell>{t("total")}</TableCell>
                  <TableCell align="right">
                    {ccyFormat(invoiceTotal)} €
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </Stack>
  );
}
