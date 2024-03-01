import { Paper, Box, Avatar, Typography, styled, Badge } from "@mui/material";
import React from "react";
import PersonPinIcon from "@mui/icons-material/PersonPin";

import { ChatAreaPropsType } from "../../../types/types";

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
      // eslint-disable-next-line quotes
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

export const ChatArea: React.FC<ChatAreaPropsType> = ({
  robotMessage,
  sendedMessage,
}) => {
  const chatAreaRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
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
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            sx={{ width: 40, height: 40 }}
            src={`${process.env.PUBLIC_URL}/Images/Assistant/assistant.jpg`}
            alt="Assistant"
          />
        </StyledBadge>
        <Typography sx={{ ml: 1 }}> {robotMessage} </Typography>
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
