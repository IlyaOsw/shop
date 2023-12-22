import * as React from "react";
import styles from "./Navbar.module.scss";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import WatchIcon from "@mui/icons-material/Watch";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import FeedIcon from "@mui/icons-material/Feed";
import HomeButton from "../Buttons/HomeButton/HomeButton";
import CartButton from "../Buttons/CartButton/CartButton";
import LoginButton from "../Buttons/LoginButton/LoginButton";
import ThemeToggle from "../Buttons/ThemeToggle/ThemeToggle";
import LanguageToggle from "../Buttons/LanguageToggle/LanguageToggle";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useTranslation } from "react-i18next";
import Routing from "../../route/Routing";
import HelpButton from "../Buttons/HelpButton/HelpButton";
import Particle from "../../assets/Particle";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const accessoriesIcons = [
  <PhoneIphoneIcon />,
  <HeadphonesIcon />,
  <WatchIcon />,
];

const generalIcons = [
  <FeedIcon />,
  <AccountCircleIcon />,
  <PermContactCalendarIcon />,
];

const headerIcons = [
  <HomeButton />,
  <CartButton />,
  <LoginButton />,
  <HelpButton />,
];
enum LocalesAcc {
  PHONE = "Phone",
  HEADPHONES = "Headphones",
  WATCH = "Watch",
}
const accessories: { id: number; label: LocalesAcc }[] = [
  { id: 0, label: LocalesAcc.PHONE },
  { id: 1, label: LocalesAcc.HEADPHONES },
  { id: 2, label: LocalesAcc.WATCH },
];

enum LocalesNavigation {
  NEWS = "News",
  CLIENTS = "Clients",
  CONTACTS = "Contacts",
}
const navigation: { id: number; label: LocalesNavigation }[] = [
  { id: 0, label: LocalesNavigation.NEWS },
  { id: 1, label: LocalesNavigation.CLIENTS },
  { id: 2, label: LocalesNavigation.CONTACTS },
];
export default function MiniDrawer() {
  const { t } = useTranslation();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 2,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className={styles.title}
          >
            E-STORE
          </Typography>
          {headerIcons.map((item) => (
            <>{item}</>
          ))}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Link to={`/`} className={styles.link}>
              <ListItemButton
                sx={{
                  minHeight: 50,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <HomeIcon fontSize="medium" color="action" />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  {t("Home")}
                </ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          {accessories.map((item, index) => (
            <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
              <Link to={`/${item.label}`.toLowerCase()} className={styles.link}>
                <ListItemButton
                  sx={{
                    minHeight: 50,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {accessoriesIcons[index % accessoriesIcons.length]}
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                    {t(item.label)}
                  </ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {navigation.map((item, index) => (
            <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
              <Link to={`/${item.label}`.toLowerCase()} className={styles.link}>
                <ListItemButton
                  sx={{
                    minHeight: 50,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {generalIcons[index % generalIcons.length]}
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                    {t(item.label)}
                  </ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Particle />
        <DrawerHeader />
        <Box className={styles.toggles} sx={{ height: 40, m: 3 }}>
          <ThemeToggle />
          <LanguageToggle />
        </Box>
        <Box sx={{ m: 3 }}>
          <Routing />
        </Box>
      </Box>
    </Box>
  );
}
