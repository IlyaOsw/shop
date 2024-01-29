import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Divider,
} from "@mui/material";
import FormDialog from "../../../../components/FormDialog/FormDialog";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTranslation } from "react-i18next";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Tooltip from "@mui/material/Tooltip";
import { NewsPostProps } from "../News";
import Collapse from "@mui/material/Collapse";
import Checkbox from "@mui/material/Checkbox";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SendIcon from "@mui/icons-material/Send";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const NewsPost: React.FC<NewsPostProps> = ({
  id,
  title,
  body,
  likes,
  dislikes,
  additionalText1,
  additionalText2,
}) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [likesCount, setLikesCount] = useState(likes);
  const [dislikesCount, setDislikesCount] = useState(dislikes);
  const [dislikeButtonDisabled, setDislikeButtonDisabled] = useState(false);
  const [likeButtonDisabled, setLikeButtonDisabled] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    if (isLiked) {
      setLikesCount((prevLikes) => prevLikes - 1);
      setDislikeButtonDisabled(false);
    } else {
      setLikesCount((prevLikes) => prevLikes + 1);
      setDislikeButtonDisabled(true);
    }
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  const toggleDislike = () => {
    if (isLiked) {
      setDislikesCount((prevLikes) => prevLikes - 1);
      setLikeButtonDisabled(false);
    } else {
      setDislikesCount((prevLikes) => prevLikes + 1);
      setLikeButtonDisabled(true);
    }
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <>
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Button variant="outlined" color="info">
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
            <Button variant="outlined" color="error">
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
                    <SendIcon />
                    {t("learnMore")}
                  </Button>
                </Tooltip>
              )}
            </Box>
          </CardActions>
        </Box>
      </Card>
      <Divider sx={{ m: 5 }}>
        <Typography variant="subtitle1" color="text.secondary">
          {t("next")}
        </Typography>
      </Divider>
    </>
  );
};

export default NewsPost;
