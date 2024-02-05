import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ShareIcon from "@mui/icons-material/Share";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

export const FormDialog: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip title={t("share2")} arrow>
        <Button variant="outlined" onClick={handleClickOpen}>
          <ShareIcon />
          <Box sx={{ marginLeft: "5px" }}>{t("share")}</Box>
        </Button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle> {t("share2")}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t("shareText")}</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label={t("emailAddress")}
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("cancel")}</Button>
          <Button type="submit">{t("share2")}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
