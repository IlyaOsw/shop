import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

import { Box, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { Links } from "./Links/Links";

import { Contacts } from "./Contacts/Contacts";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const CustomAlert: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      //   sx={{
      //     display: "flex",
      //     alignItems: "center",
      //     justifyContent: "center",
      //   }}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          p: 2,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6" sx={{ mr: 1 }}>
            Hey!
          </Typography>
          <SentimentSatisfiedAltIcon color="info" fontSize="large" />
        </Box>
        <Typography variant="body1">
          Welcome to my pet-project, where I can demonstrate you my skills!
        </Typography>
        <Typography variant="body1">
          I`m from Estonia and specialize in front-end development.
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }}>
          To visit my personal website, please
        </Typography>
        <Button variant="outlined" color="info">
          <Tooltip title={"Click"}>
            <Link
              to={"https://ilyaosw.github.io/IljaOssipov/"}
              target="_blank"
              style={{
                color: "rgba(2, 136, 209, 0.9)",
                textDecoration: "none",
              }}
            >
              click here
            </Link>
          </Tooltip>
        </Button>
        <Box sx={{ mt: 3 }}>
          <Contacts />
        </Box>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Follow my social media
        </Typography>
        <Links />
        <Box sx={{ mt: 2 }}>
          <Tooltip title={"Continue"}>
            <Button variant="contained" color="info" onClick={handleClose}>
              Continue
            </Button>
          </Tooltip>
        </Box>
      </Box>
    </Dialog>
  );
};
