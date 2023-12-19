import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function CartButton() {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton aria-label="homeicon" size="large">
        <ShoppingCartIcon fontSize="large" color="action" />
      </IconButton>
    </Stack>
  );
}
