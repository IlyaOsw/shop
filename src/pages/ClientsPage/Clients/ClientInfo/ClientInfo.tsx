import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Avatar,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneForwardedOutlinedIcon from "@mui/icons-material/PhoneForwardedOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import { FormDialog } from "../../../../components/FormDialog/FormDialog";

const iconStyle = { marginRight: "5px", marginBottom: "-3px" };

//@ts-ignore
export const ClientInfo: React.FC = ({ user }) => {
  const { t } = useTranslation();
  return (
    <Box key={user.id} sx={{ margin: "10px 0px" }}>
      <Card
        sx={{
          width: "300px",
          height: "400px",
          position: "relative",
        }}
      >
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
          <Typography variant="h6" color="text.secondary">
            <Box sx={{ p: 0.5 }}>
              <MailOutlineOutlinedIcon color="secondary" style={iconStyle} />
              {t("email")}: {user.email}
            </Box>
            <Box sx={{ p: 0.5 }}>
              <PhoneForwardedOutlinedIcon color="secondary" style={iconStyle} />
              {t("phone")}: {user.phone}
            </Box>
            <Box sx={{ p: 0.5 }}>
              <FmdGoodOutlinedIcon color="secondary" style={iconStyle} />
              {t("city")}: {user.city}
            </Box>
            <Box sx={{ p: 0.5 }}>
              <ArrowForwardIosOutlinedIcon
                color="secondary"
                style={iconStyle}
              />
              {t("website")}: {user.website}
            </Box>
            <Box sx={{ p: 0.5 }}>
              <BusinessOutlinedIcon color="secondary" style={iconStyle} />
              {t("company")}: {user.company}
            </Box>
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            position: "absolute",
            right: "5%",
            bottom: "1%",
          }}
        >
          <FormDialog />
        </CardActions>
      </Card>
    </Box>
  );
};
