import React from "react";
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

//@ts-ignore
const NewsPost: React.FC = ({ post }) => {
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
        alt="green iguana"
        height="400"
        image={`${process.env.PUBLIC_URL}/Images/News/news1.jpg`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body}
          {post.body}
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
        </Box>
        <CardActions>
          <FormDialog />
          <Tooltip title={t("learnMore")} arrow>
            <Button variant="contained">
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
