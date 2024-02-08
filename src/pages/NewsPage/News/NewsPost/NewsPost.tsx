import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Collapse,
  Divider,
  Tooltip,
  Typography,
} from "@mui/material";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { FormDialog } from "../../../../components/FormDialog/FormDialog";
import { NewsPostPropsType } from "../../../../types/types";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const NewsPost: React.FC<NewsPostPropsType> = ({
  id,
  title,
  body,
  likes,
  dislikes,
  additionalText1,
  additionalText2,
  postDate,
}) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const [dislikesCount, setDislikesCount] = useState(dislikes);
  const [dislikeButtonDisabled, setDislikeButtonDisabled] = useState(false);
  const [likeButtonDisabled, setLikeButtonDisabled] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleExpandClick = () => setExpanded(!expanded);

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

  const countStyle = { cursor: "default", borderRadius: "15px" };

  return (
    <>
      <Divider sx={{ m: 5 }}>
        <Typography variant="subtitle1" color="text.secondary">
          {t("next")}
        </Typography>
      </Divider>
      <Card
        sx={{
          position: " relative",
          mb: 2,
        }}
      >
        <CardMedia
          component="img"
          alt="News post"
          height="500"
          image={`${process.env.PUBLIC_URL}/Images/News/Posts/${id}.jpg`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {t(title)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t(body)}
          </Typography>
        </CardContent>
        <Box sx={{ ml: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {postDate}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
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
                {...label}
                icon={<ThumbUpOffAltIcon fontSize="large" color="info" />}
                checkedIcon={<ThumbUpIcon fontSize="large" color="info" />}
              />
            </Tooltip>
            <Tooltip title={t("dislike")} arrow>
              <Checkbox
                onClick={toggleDislike}
                disabled={dislikeButtonDisabled}
                {...label}
                icon={<ThumbDownOffAltIcon fontSize="large" color="error" />}
                checkedIcon={
                  <ThumbDownAltIcon fontSize="large" color="error" />
                }
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
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph color="text.secondary">
                {t(additionalText1)}
              </Typography>
              <Typography paragraph color="text.secondary">
                {t(additionalText2)}
              </Typography>
            </CardContent>
          </Collapse>
          <CardActions>
            <FormDialog />
            <Box
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              {expanded ? (
                <Tooltip title={t("close")} arrow>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ marginLeft: "5px" }}
                  >
                    <KeyboardArrowUpIcon />
                    {t("close")}
                  </Button>
                </Tooltip>
              ) : (
                <Tooltip title={t("learnMore")} arrow>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ marginLeft: "5px" }}
                  >
                    <KeyboardArrowDownIcon />
                    {t("learnMore")}
                  </Button>
                </Tooltip>
              )}
            </Box>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};
