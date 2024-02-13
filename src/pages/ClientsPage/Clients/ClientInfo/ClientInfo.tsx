import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Avatar,
  CardActions,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneForwardedOutlinedIcon from "@mui/icons-material/PhoneForwardedOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

import { FormDialog } from "../../../../components/FormDialog/FormDialog";
import { ClientType } from "../../../../types/types";

const iconStyle = { marginRight: "5px", marginBottom: "-3px" };

export const ClientInfo: React.FC<{ user: ClientType }> = ({ user }) => {
  const { t } = useTranslation();
  return (
    <Box
      key={user.id}
      sx={{
        height: "400px",
        position: "relative",
      }}
    >
      <Divider color="lightgray" />
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            src={`${process.env.PUBLIC_URL}/Images/ClientAvatars/${user.avatar}.jpg`}
          />
          <Typography variant="h5" sx={{ p: 2 }}>
            {user.name}
          </Typography>
        </Box>
        <Typography variant="h6" color="text.info">
          <Box sx={{ p: 0.5 }}>
            <MailOutlineOutlinedIcon color="info" style={iconStyle} />
            {t("email")}: {user.email}
          </Box>
          <Box sx={{ p: 0.5 }}>
            <PhoneForwardedOutlinedIcon color="info" style={iconStyle} />
            {t("phone")}: {user.phone}
          </Box>
          <Box sx={{ p: 0.5 }}>
            <FmdGoodOutlinedIcon color="info" style={iconStyle} />
            {t("city")}: {user.city}
          </Box>
          <Box sx={{ p: 0.5 }}>
            <ArrowForwardIosOutlinedIcon color="info" style={iconStyle} />
            {t("website")}: {user.website}
          </Box>
          <Box sx={{ p: 0.5 }}>
            <BusinessOutlinedIcon color="info" style={iconStyle} />
            {t("company")}: {user.company}
          </Box>
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "start",
          ml: 1.5,
        }}
      >
        <FormDialog />
      </CardActions>
    </Box>
  );
};
