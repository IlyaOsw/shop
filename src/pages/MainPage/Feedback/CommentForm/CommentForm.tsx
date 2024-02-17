import { Box, Button, Snackbar, Tooltip, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";
import { TransitionProps } from "@mui/material/transitions";

import { SnackbarAlert } from "../../../../components/SnackbarAlert/SnackbarAlert";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "lightgray",
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "lightgray",
  },
});

export const CommentForm: React.FC = () => {
  const { t } = useTranslation();
  const [commentContent, setCommentContent] = React.useState("");
  const [snackbar, setSnackbar] = React.useState(false);

  const [transition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const clearContent = () => {
    if (commentContent.length === 0) {
      alert("Field cannot be empty");
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
      <Box>
        <CustomTextField
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={5}
          variant="outlined"
          InputLabelProps={{
            style: { color: "gray" },
          }}
        />
      </Box>
      <Tooltip title={t("sendComment")} arrow placement="right">
        <Button variant="contained" onClick={clearContent}>
          {t("send")}
        </Button>
      </Tooltip>
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
