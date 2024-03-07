import React from "react";
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  useMediaQuery,
  useTheme,
  TextField,
  Button,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

import { CloseButton } from "../../CloseButton/CloseButton";
import { ChatContentPropsType } from "../../../types/types";
import { ChatArea } from "../ChatArea/ChatArea";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Content: React.FC<ChatContentPropsType> = ({
  open,
  setOpen,
  robotMessage,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [clientMessage, setClientMessage] = React.useState("");

  const [sendedMessage, setSendedMessage] = React.useState<string[]>([]);

  const handleClose = () => setOpen(false);

  const handleSendMessage = () => {
    if (clientMessage.trim().length > 0) {
      setSendedMessage([...sendedMessage, clientMessage]);
    }
    setClientMessage("");
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
    >
      <Box sx={{ p: 2 }}>
        <CloseButton onClose={handleClose} />
      </Box>
      <DialogTitle sx={{ textAlign: "center" }}>{t("chatTitle")}</DialogTitle>
      <DialogContent>
        <ChatArea robotMessage={robotMessage} sendedMessage={sendedMessage} />
        <TextField
          label={t("enterMessage")}
          variant="outlined"
          fullWidth
          margin="normal"
          value={clientMessage}
          onChange={(event) => setClientMessage(event.target.value)}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="info"
            onClick={handleSendMessage}
            sx={{ borderRadius: "25px" }}
          >
            {t("send")}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
