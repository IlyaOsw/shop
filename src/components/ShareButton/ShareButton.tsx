import * as React from "react";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import ShareIcon from "@mui/icons-material/Share";

export const ShareButton: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip title={t("share2")} arrow>
        <Button
          variant="contained"
          color="info"
          onClick={handleClickOpen}
          sx={{ borderRadius: "25px" }}
        >
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
          <Button onClick={handleClose} sx={{ borderRadius: "25px" }}>
            {t("cancel")}
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: "25px" }}
          >
            {t("share2")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
