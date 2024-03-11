import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

import { CommentFormPropsType } from "../../../../../types/types";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#1976d2",
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#1976d2",
  },
});

export const Textarea: React.FC<CommentFormPropsType> = ({
  commentContent,
  setCommentContent,
}) => {
  return (
    <Box>
      <CustomTextField
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        label="Comment"
        multiline
        rows={5}
        variant="outlined"
        InputLabelProps={{
          style: { color: "#1976d2" },
        }}
        InputProps={{
          style: { color: "#a6a6a6" },
        }}
      />
    </Box>
  );
};
