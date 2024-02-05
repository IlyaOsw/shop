import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneForwardedOutlinedIcon from "@mui/icons-material/PhoneForwardedOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import { FormDialog } from "../../../../components/FormDialog/FormDialog";
import { useTranslation } from "react-i18next";

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
const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
};

const stringAvatar = (name: string) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
};

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
            {user.id % 2 === 0 ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar {...stringAvatar(user.name)} />
              </StyledBadge>
            ) : (
              <Avatar {...stringAvatar(user.name)} />
            )}

            <Typography variant="h5" sx={{ p: 2 }}>
              {user.name}
            </Typography>
          </Box>
          <Typography variant="h6" color="text.secondary">
            <Box sx={{ p: 0.5 }}>
              <MailOutlineOutlinedIcon
                color="secondary"
                style={{ marginRight: "5px", marginBottom: "-3px" }}
              />
              {t("email")}: {user.email}
            </Box>
            <Box sx={{ p: 0.5 }}>
              <PhoneForwardedOutlinedIcon
                color="secondary"
                style={{ marginRight: "5px", marginBottom: "-3px" }}
              />
              {t("phone")}: {user.phone}
            </Box>
            <Box sx={{ p: 0.5 }}>
              <FmdGoodOutlinedIcon
                color="secondary"
                style={{ marginRight: "5px", marginBottom: "-3px" }}
              />
              {t("city")}: {user.city}
            </Box>
            <Box sx={{ p: 0.5 }}>
              <ArrowForwardIosOutlinedIcon
                color="secondary"
                style={{ marginRight: "5px", marginBottom: "-3px" }}
              />
              {t("website")}: {user.website}
            </Box>
            <Box sx={{ p: 0.5 }}>
              <BusinessOutlinedIcon
                color="secondary"
                style={{ marginRight: "5px", marginBottom: "-3px" }}
              />
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
