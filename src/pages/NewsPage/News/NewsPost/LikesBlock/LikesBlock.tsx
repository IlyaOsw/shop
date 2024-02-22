import { Box, Button, Tooltip, Checkbox } from "@mui/material";
import { t } from "i18next";
import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

import { LikesBlockPropsType } from "../../../../../types/types";

export const LikesBlock: React.FC<LikesBlockPropsType> = ({
  likes,
  dislikes,
}) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [likesCount, setLikesCount] = React.useState(likes);
  const [dislikesCount, setDislikesCount] = React.useState(dislikes);
  const [dislikeButtonDisabled, setDislikeButtonDisabled] =
    React.useState(false);
  const [likeButtonDisabled, setLikeButtonDisabled] = React.useState(false);

  const toggleLike = () => {
    if (isLiked) {
      setLikesCount((prevLikes: number) => prevLikes - 1);
      setDislikeButtonDisabled(false);
    } else {
      setLikesCount((prevLikes: number) => prevLikes + 1);
      setDislikeButtonDisabled(true);
    }
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  const toggleDislike = () => {
    if (isLiked) {
      setDislikesCount((prevLikes: number) => prevLikes - 1);
      setLikeButtonDisabled(false);
    } else {
      setDislikesCount((prevLikes: number) => prevLikes + 1);
      setLikeButtonDisabled(true);
    }
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  const countStyle = { cursor: "default", borderRadius: "25px" };
  return (
    <Box>
      <Button
        disableRipple
        disableTouchRipple
        variant="outlined"
        color="info"
        sx={countStyle}
      >
        {likesCount}
      </Button>
      <Tooltip title={t("like")} arrow>
        <Checkbox
          onClick={toggleLike}
          disabled={likeButtonDisabled}
          icon={<ThumbUpOffAltIcon fontSize="large" color="info" />}
          checkedIcon={<ThumbUpIcon fontSize="large" color="info" />}
        />
      </Tooltip>
      <Tooltip title={t("dislike")} arrow>
        <Checkbox
          onClick={toggleDislike}
          disabled={dislikeButtonDisabled}
          icon={<ThumbDownOffAltIcon fontSize="large" color="error" />}
          checkedIcon={<ThumbDownIcon fontSize="large" color="error" />}
        />
      </Tooltip>
      <Button
        disableRipple
        disableTouchRipple
        variant="outlined"
        color="error"
        sx={countStyle}
      >
        {dislikesCount}
      </Button>
    </Box>
  );
};
