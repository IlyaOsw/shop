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

const NewsPost: React.FC<NewsPostProps> = ({
  id,
  title,
  body,
  likes,
  dislikes,
}) => {
  const { t } = useTranslation();

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
        height="450"
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
          <Button variant="outlined" color="success">
            {likes}
          </Button>

          <Tooltip title={t("like")} arrow>
            <IconButton color="info">
              <ThumbUpOffAltIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title={t("dislike")} arrow>
            <IconButton color="warning">
              <ThumbDownOffAltIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Button variant="outlined" color="error">
            {dislikes}
          </Button>
        </Box>
        <CardActions>
          <FormDialog />
          <Tooltip title={t("learnMore")} arrow>
            <Button variant="outlined">
              <MoreVertIcon />
              {t("learnMore")}
            </Button>
          </Tooltip>
        </CardActions>
      </Box>
    </Card>
  );
};

export default NewsPost;
