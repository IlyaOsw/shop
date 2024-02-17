import { AlertProps } from "@mui/material";
import React from "react";
import MuiAlert from "@mui/material/Alert";

export const SnackbarAlert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);
