import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

import {
  Box,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

import { Links } from "./Links/Links";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const CustomAlert: React.FC = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Dialog
      fullScreen={fullScreen}
      TransitionComponent={Transition}
      keepMounted
      open={open}
      onClose={handleClose}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar />
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
        <Box sx={{ display: "flex", mb: 3 }}>
          <Typography variant="h6" sx={{ mr: 1 }}>
            Hey!
          </Typography>
          <SentimentSatisfiedAltIcon color="info" fontSize="large" />
        </Box>
        <Typography variant="body1">
          Welcome to my pet-project, where I can demonstrate you my skills!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          I`m from Estonia and specialize in front-end development.
        </Typography>
        <Box sx={{ mt: 5 }}>
          <Tooltip title={"Continue"}>
            <Button
              variant="contained"
              color="info"
              onClick={handleClose}
              sx={{ borderRadius: "25px" }}
            >
              Continue
            </Button>
          </Tooltip>
        </Box>
        <Typography variant="body1" sx={{ mt: 5, mb: 2 }}>
          To visit my personal website, please
        </Typography>
        <Button variant="outlined" color="info" sx={{ borderRadius: "25px" }}>
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
        <Typography variant="body1" sx={{ mt: 3, mb: 2 }}>
          Follow my social media
        </Typography>
        <Links />
      </Box>
    </Dialog>
  );
};
