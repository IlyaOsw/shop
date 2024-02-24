import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PersonIcon from "@mui/icons-material/Person";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import {
  Tooltip,
  IconButton,
  Box,
  Paper,
  useMediaQuery,
  useTheme,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

import { useTranslation } from "react-i18next";

import { CloseButton } from "../CloseButton/CloseButton";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export const Chat: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [clientMessage, setClientMessage] = React.useState("");
  const [robotMessage, setRobotMessage] = React.useState<string[]>([
    "Typing...",
  ]);
  const [sendedMessage, setSendedMessage] = React.useState<string[]>([]);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleSendMessage = () => {
    if (clientMessage.trim().length > 0) {
      setSendedMessage([clientMessage]);
    }
    setClientMessage("");
  };

  React.useEffect(() => {
    const timerForMessage = setTimeout(() => {
      setRobotMessage(["Hello! Can I help you?"]);
    }, 3000);

    return () => clearTimeout(timerForMessage);
  }, []);

  return (
    <>
      <Tooltip title="Help" arrow>
        <IconButton size="large" onClick={handleClickOpen}>
          <ChatIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <Box sx={{ p: 2 }}>
          <CloseButton onClose={handleClose} />
        </Box>
        <DialogTitle sx={{ textAlign: "center" }}>{t("chatTitle")}</DialogTitle>
        <DialogContent>
          <Paper
            elevation={6}
            sx={{
              height: "255px",
              padding: "16px",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <Box
              sx={{
                height: "50px",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <PersonPinIcon fontSize="large" color="info" />
              </StyledBadge>
              <Typography sx={{ ml: 1 }}> {robotMessage} </Typography>
            </Box>
            {sendedMessage.map((item) => (
              <Box
                key={item}
                sx={{
                  height: "50px",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <PersonIcon fontSize="large" color="info" />
                {item}
              </Box>
            ))}
          </Paper>
          <TextField
            label="Введите ваше сообщение"
            variant="outlined"
            fullWidth
            margin="normal"
            value={clientMessage}
            onChange={(event) => setClientMessage(event.target.value)}
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendMessage}
            >
              {t("send")}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};
