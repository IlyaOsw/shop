import * as React from "react";

import { Tooltip, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

import { useTranslation } from "react-i18next";

import { Content } from "./Content/Content";

export const Chat: React.FC = () => {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);
  const [robotMessage, setRobotMessage] = React.useState<string[]>([
    "Typing...",
  ]);

  const handleClickOpen = () => {
    setOpen(true);
    const timerForMessage = setTimeout(() => {
      setRobotMessage(["Hello! How can I help you?"]);
    }, 3000);

    return () => clearTimeout(timerForMessage);
  };
  return (
    <>
      <Tooltip title={t("help")} arrow>
        <IconButton size="large" onClick={handleClickOpen}>
          <ChatIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      <Content open={open} setOpen={setOpen} robotMessage={robotMessage} />
    </>
  );
};
