import React from "react";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import Logout from "@mui/icons-material/Logout";

import { useTranslation } from "react-i18next";

import { Divider } from "@mui/material";

import { Link } from "react-router-dom";

import { CustomBadge } from "../../CustomBadge/CustomBadge";
import { AuthenticationPropsType } from "../../../types/types";

export const Authentication: React.FC<AuthenticationPropsType> = ({
  isAuth,
  setIsAuth,
  setIsOpen,
}) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);
  const handleOpen = () => setIsOpen(true);

  const handleLogout = () => setIsAuth(false);

  return (
    <>
      {isAuth ? (
        <>
          <IconButton onClick={handleClick} size="small">
            <CustomBadge>
              <PersonIcon fontSize="large" style={{ color: "#ffffff" }} />
            </CustomBadge>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleCloseMenu}
            onClick={handleCloseMenu}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  // eslint-disable-next-line quotes
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              {t("logout")}
            </MenuItem>
            <Divider />
            <Link
              to="/account"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>
                <Avatar />
                {t("myAcc")}
              </MenuItem>
            </Link>
          </Menu>
        </>
      ) : (
        <>
          <IconButton onClick={handleClick} size="small">
            <PersonIcon fontSize="large" style={{ color: "#ffffff" }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleCloseMenu}
            onClick={handleCloseMenu}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  // eslint-disable-next-line quotes
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleOpen}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              {t("login")}
            </MenuItem>
            <Divider />
            <MenuItem disabled>
              <Avatar />
              {t("myAcc")}
            </MenuItem>
          </Menu>
        </>
      )}
    </>
  );
};
