import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  IconButton,
  Modal,
  Backdrop,
  Fade,
  Box,
  Typography,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { t } from "i18next";
import React, { useState } from "react";

import { useCart } from "../../../hooks/useCart";
import { ShopCartPropsType } from "../../../types/types";

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

export const Products: React.FC<ShopCartPropsType> = ({
  open,
  handleClose,
}) => {
  //@ts-ignore
  const { cart, removeItem, disableCartButton } = useCart();

  const [openModal, setOpenModal] = useState<number | null>(null);

  const handleCloseModal = () => setOpenModal(null);
  const handleOpenModal = (itemId: number) => setOpenModal(itemId);

  const total = (items: any) => {
    return items.reduce((acc: number, item: { price: number }) => {
      return acc + item.price;
    }, 0);
  };

  const ccyFormat = (num: number) => `${num.toFixed(2)}`;
  const invoiceTotal = total(cart);

  return (
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
                <TableCell align="right">{ccyFormat(row.price)}€</TableCell>
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
  );
};
