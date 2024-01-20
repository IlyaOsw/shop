import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import FormDialog from "../../../../components/FormDialog/FormDialog";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTranslation } from "react-i18next";
import IconButton from "@mui/material/IconButton";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Tooltip from "@mui/material/Tooltip";
import { NewsPostProps } from "../News";
import Collapse from "@mui/material/Collapse";

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

  const like = () => {
    setLikesCount(likesCount + 1);
  };
  const dislike = () => {
    setDislikesCount(dislikesCount + 1);
  };
  return (
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
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
          {body}
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
            <IconButton color="info" onClick={like}>
              <ThumbUpOffAltIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title={t("dislike")} arrow>
            <IconButton color="error" onClick={dislike}>
              <ThumbDownOffAltIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Button variant="outlined" color="error">
            {dislikesCount}
          </Button>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph color="text.secondary">
              {additionalText1}
            </Typography>
            <Typography paragraph color="text.secondary">
              {additionalText2}
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
                  <MoreVertIcon />
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
                  <MoreVertIcon />
                  {t("learnMore")}
                </Button>
              </Tooltip>
            )}
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
};

export default NewsPost;
