import { Box, Button, Snackbar, Tooltip, Typography } from "@mui/material";
import React from "react";

import { useTranslation } from "react-i18next";
import { TransitionProps } from "@mui/material/transitions";

import { SnackbarAlert } from "../../../../components/SnackbarAlert/SnackbarAlert";

import { Textarea } from "./Textarea/Textarea";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";

export const CommentForm: React.FC = () => {
  const { t } = useTranslation();

  const [commentContent, setCommentContent] = React.useState("");

  const [snackbar, setSnackbar] = React.useState(false);

  const [error, setError] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const [transition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const clearContent = () => {
    if (commentContent.trim().length === 0) {
      setError(true);
      setOpen(true);
    } else {
      setCommentContent("");
      setSnackbar(true);
    }
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { mt: 3, mb: 3, width: "33ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography sx={{ mt: 3 }}>{t("leaveComment")}</Typography>
      <Textarea
        commentContent={commentContent}
        setCommentContent={setCommentContent}
      />
      <Tooltip title={t("sendComment")} arrow>
        <Button
          variant="contained"
          onClick={clearContent}
          sx={{ borderRadius: "25px" }}
        >
          {t("send")}
        </Button>
      </Tooltip>
      {error && <ErrorMessage open={open} setOpen={setOpen} />}
      {snackbar && (
        <Snackbar
          open={snackbar}
          autoHideDuration={2000}
          onClose={() => setSnackbar(false)}
          TransitionComponent={transition}
          key={transition ? transition.name : ""}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SnackbarAlert onClose={() => setSnackbar(false)}>
            {t("commentSended")}
          </SnackbarAlert>
        </Snackbar>
      )}
    </Box>
  );
};
