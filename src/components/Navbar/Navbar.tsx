import * as React from "react";
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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FeedIcon from "@mui/icons-material/Feed";
import CartButton from "../Buttons/CartButton/CartButton";
import LoginButton from "../Buttons/LoginButton/LoginButton";
import { ThemeToggle } from "../Buttons/ThemeToggle/ThemeToggle";
import LanguageToggle from "../Buttons/LanguageToggle/LanguageToggle";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Routing from "../../routes/Routing";
import FAQButton from "../Buttons/FAQButton/FAQButton";
import Particle from "../../assets/Particle";
import { useTranslation } from "react-i18next";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useSelector } from "react-redux";
import { NavbarType } from "../../redux/reducers/navbar-reducer";
import { CartProvider } from "../../hooks/useCart";
import styles from "./Themes.module.scss";

const drawerWidth = 250;

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

const generalIcons = [
  <HomeIcon />,
  <ShoppingBasketIcon />,
  <FeedIcon />,
  <AccountCircleIcon />,
];
const headerIcons = [<CartButton />, <LoginButton />, <FAQButton />];

export default function MiniDrawer() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const navbarData = useSelector(
    (state: { navbar: NavbarType }) => state.navbar
  );
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [darkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <CartProvider>
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
              sx={{ width: "100%" }}
            >
              E-STORE
            </Typography>
            {headerIcons.map((item, index) => (
              <React.Fragment key={index}>{item}</React.Fragment>
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
          <List>
            {navbarData.map(
              (
                item: {
                  id: React.Key | null;
                  label: any | string | string[];
                },
                index: number
              ) => (
                <ListItem
                  key={item.id}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <Divider />
                  <Link
                    to={`/${item.label}`.toLowerCase()}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 75,
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
              )
            )}
            <Divider />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
          className={darkMode ? styles.darkTheme : styles.lightTheme}
        >
          <Particle />
          <DrawerHeader />
          <Box
            sx={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
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
}
