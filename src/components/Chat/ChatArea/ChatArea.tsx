import { Paper, Box, Avatar, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import PersonPinIcon from "@mui/icons-material/PersonPin";

import { ChatAreaPropsType } from "../../../types/types";
import { CustomBadge } from "../../CustomBadge/CustomBadge";

export const ChatArea: React.FC<ChatAreaPropsType> = ({
  robotMessage,
  sendedMessage,
}) => {
  const chatAreaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [sendedMessage]);

  return (
    <Paper
      elevation={6}
      sx={{
        height: "230px",
        padding: "5px",
        overflowY: "auto",
      }}
      ref={chatAreaRef}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <CustomBadge>
          <Avatar
            src={`${process.env.PUBLIC_URL}/Images/Assistant/assistant.jpg`}
            alt="Assistant"
          />
        </CustomBadge>
        <Typography sx={{ ml: 1 }}>{robotMessage}</Typography>
      </Box>
      {sendedMessage.map((item) => (
        <Box
          key={item}
          sx={{
            height: "50px",
            width: "60%",
            display: "flex",
            justifyContent: "flex-end",
            marginLeft: "auto",
            alignItems: "center",
          }}
        >
          {item}
          <PersonPinIcon fontSize="large" color="info" />
        </Box>
      ))}
    </Paper>
  );
};
