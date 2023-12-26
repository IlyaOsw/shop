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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  cursor: "default",
};

const TAX_RATE = 0.07;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty: number, unit: number) {
  return qty * unit;
}

function createRow(desc: string, qty: number, unit: number) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

interface Row {
  desc: string;
  qty: number;
  unit: number;
  price: number;
}

function subtotal(items: readonly Row[]) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Apple iPhone 15 Pro Max 256GB", 1, 1489.0),
  createRow("Apple Watch Series 8 GPS/LTE 45mm", 3, 649.0),
  createRow("Apple AirPods Pro 2nd gen", 2, 279.0),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function CartButton() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton aria-label="homeicon" size="large" onClick={handleOpen}>
        <ShoppingCartIcon fontSize="large" color="action" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                {rows.map((row) => (
                  <TableRow key={row.desc}>
                    <TableCell>{row.desc}</TableCell>
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
