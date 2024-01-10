import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import styles from "./ClientInfo.module.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneForwardedOutlinedIcon from "@mui/icons-material/PhoneForwardedOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

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
function stringToColor(string: string) {
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
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

//@ts-ignore
const ClientInfo = ({ user }) => {
  return (
    <Box key={user.id} className={styles.clientInfo}>
      <Card className={styles.card}>
        <CardContent>
          <Box className={styles.clientName}>
            {user.id % 2 === 0 ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  {...stringAvatar(user.name)}
                  className={styles.avatar}
                />
              </StyledBadge>
            ) : (
              <Avatar {...stringAvatar(user.name)} className={styles.avatar} />
            )}

            <Typography variant="h5" sx={{ p: 2 }}>
              {user.name}
            </Typography>
          </Box>
          <Typography sx={{ pl: 2 }} variant="h6" color="text.secondary">
            <Box sx={{ p: 0.5 }}>
              <MailOutlineOutlinedIcon
                color="secondary"
                style={{ marginRight: "5px", marginBottom: "-3px" }}
              />
              Email: {user.email}
            </Box>
            <Box sx={{ p: 0.5 }}>
              <PhoneForwardedOutlinedIcon
                color="secondary"
                style={{ marginRight: "5px", marginBottom: "-3px" }}
              />
              Phone: {user.phone}
            </Box>
            <Box sx={{ p: 0.5 }}>
              <NavigationOutlinedIcon
                color="secondary"
                style={{ marginRight: "5px", marginBottom: "-3px" }}
              />
              Street: {user.address.street}
            </Box>
            <Box sx={{ p: 0.5 }}>
              <FmdGoodOutlinedIcon
                color="secondary"
                style={{ marginRight: "5px", marginBottom: "-3px" }}
              />
              City: {user.address.city}
            </Box>
            <Box sx={{ p: 0.5 }}>
              <ArrowForwardIosOutlinedIcon
                color="secondary"
                style={{ marginRight: "5px", marginBottom: "-3px" }}
              />
              Website: {user.website}
            </Box>
            <Box sx={{ p: 0.5 }}>
              <BusinessOutlinedIcon
                color="secondary"
                style={{ marginRight: "5px", marginBottom: "-3px" }}
              />
              Company: {user.company.name}
            </Box>
          </Typography>
        </CardContent>
        <CardActions sx={{ pl: 3 }}>
          <Button size="large">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ClientInfo;
