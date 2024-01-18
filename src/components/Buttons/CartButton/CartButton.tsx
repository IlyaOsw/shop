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
import DeleteIcon from "@mui/icons-material/Delete";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  cursor: "default",
  borderRadius: "10px",
  overflowY: "auto",
};

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

export default function CartButton() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [cart, setCart] = useState([
    { id: 0, name: "Apple iPhone 15 Pro Max 256GB", qty: 1, price: 1489 },
    {
      id: 1,
      name: "Apple Watch Series 8 GPS/LTE 45mm",
      qty: 1,
      price: 649,
    },
    { id: 2, name: "Apple AirPods Pro 2nd gen", qty: 1, price: 279 },
  ]);

  function removeItem(id: number) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  const invoiceTotal = total(cart);
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
      <Tooltip title={t("cart")} arrow>
        <IconButton aria-label="homeicon" size="large" onClick={handleOpen}>
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon fontSize="large" color="action" />
          </Badge>
        </IconButton>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ p: 2 }}>
            <CloseButton onClose={handleClose} />
          </Box>
          <Typography
            id="modal-modal-title"
            variant="h5"
            sx={{ m: 2, textAlign: "center" }}
          >
            {t("cart")}
          </Typography>
          <TableContainer component={Paper} sx={{ p: 2 }}>
            <Table aria-label="spanning table">
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
                {cart.map((row: any) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">{ccyFormat(row.price)}€</TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="delete"
                        color="secondary"
                        onClick={() => removeItem(row.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={2}></TableCell>
                  <TableCell>{t("total")}</TableCell>
                  <TableCell align="right">
                    {ccyFormat(invoiceTotal)}€
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
