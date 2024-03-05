import * as React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { Divider } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FeedIcon from "@mui/icons-material/Feed";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Theme, useTheme, styled, CSSObject } from "@mui/material/styles";

import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { LanguageToggle } from "../LanguageToggle/LanguageToggle";
import { ShopCart } from "../ShopCart/ShopCart";
import { Login } from "../Login/Login";
import { Routing } from "../../routes/Routing";
import { FAQ } from "../FAQ/FAQ";
import { Particle } from "../Particle/Particle";
import { CartProvider } from "../../hooks/useCart";
import { NavbarType } from "../../redux/reducers/navbar-reducer";

import { AppBarProps } from "../../types/types";

import { Chat } from "../Chat/Chat";

import styles from "./Themes.module.scss";

const drawerWidth = 235;

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

const generalIcons = [
  <HomeIcon color="info" />,
  <ShoppingBasketIcon color="info" />,
  <FeedIcon color="info" />,
  <AccountCircleIcon color="info" />,
];

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  const navbarData = useSelector(
    (state: { navbar: NavbarType }) => state.navbar
  );

  const handleDrawerOpen = () => setOpen(true);

  const handleDrawerClose = () => setOpen(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <CartProvider>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} color="info">
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 2,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap sx={{ width: "100%" }}>
              E-STORE
            </Typography>
            <ShopCart />
            <Chat />
            <Login />
            <FAQ />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader
            className={darkMode ? styles.darkTheme : styles.lightTheme}
          >
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon color="info" />
              )}
            </IconButton>
          </DrawerHeader>
          <List
            className={darkMode ? styles.darkTheme : styles.lightTheme}
            sx={{ height: "100%" }}
          >
            {navbarData.map(
              (
                item: {
                  id: number;
                  label: string;
                },
                index: number
              ) => (
                <ListItem
                  key={item.id}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <Divider color="lightgray" />
                  <Link
                    to={`/${item.label}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 80,
                        justifyContent: open ? "initial" : "center",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {generalIcons[index]}
                      </ListItemIcon>
                      <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                        {t(item.label)}
                      </ListItemText>
                    </ListItemButton>
                  </Link>
                </ListItem>
              )
            )}
            <Divider color="lightgray" />
          </List>
        </Drawer>
        <Box
          sx={{
            flexGrow: 1,
          }}
          className={darkMode ? styles.darkTheme : styles.lightTheme}
        >
          <Particle />
          <Box
            sx={{
              mt: 10,
              mb: 5,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <ThemeToggle toggleDarkMode={toggleDarkMode} />
            <LanguageToggle />
          </Box>
          <Box sx={{ m: 1 }}>
            <Routing />
          </Box>
        </Box>
      </Box>
    </CartProvider>
  );
};
