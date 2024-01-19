import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
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
import { useCart } from "../../../hooks/useCart";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

export default function CartButton() {
  const { t } = useTranslation();

  const handleOpen = () => setOpen(true);

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

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={1}>
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
          aria-labelledby="responsive-dialog-title"
        >
          <Box sx={{ p: 2 }}>
            <CloseButton onClose={handleClose} />
          </Box>
          <DialogTitle
            id="responsive-dialog-title"
            sx={{ m: 2, textAlign: "center" }}
          >
            {t("cart")}
          </DialogTitle>
          <DialogContent>
            <TableContainer component={Paper}>
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
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">{t("sum")}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((row: any) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.title}</TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right">
                        {ccyFormat(row.price)}€
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip title={t("delete")}>
                          <IconButton
                            aria-label="delete"
                            color="secondary"
                            onClick={() => removeItem(row.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
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
          </DialogContent>
        </Dialog>
      </Stack>
    </>
  );
}
