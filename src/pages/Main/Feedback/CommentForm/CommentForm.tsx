import { Box, Button, Snackbar, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import { TransitionProps } from "@mui/material/transitions";

import { SnackbarAlert } from "../../../../components/SnackbarAlert/SnackbarAlert";

import { ErrorMessage } from "../../../../components/ErrorMessage/ErrorMessage";

import { Textarea } from "./Textarea/Textarea";

export const CommentForm: React.FC = () => {
  const { t } = useTranslation();
  const [commentContent, setCommentContent] = useState("");
  const [snackbar, setSnackbar] = useState(false);
  const [error, setError] = useState(false);
  const [, setOpen] = useState(false);

  const [transition] = useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const clearContent = () => {
    if (commentContent.trim().length === 0) {
      setError(true);
      setOpen(true);
    } else {
      setCommentContent("");
      setSnackbar(true);
      setError(false);
    }
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { mt: 3, mb: 3, width: "33ch" },
      }}
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
      {error && <ErrorMessage setError={setError} />}
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
