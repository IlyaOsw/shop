import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Divider,
  Typography,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { ShareButton } from "../../../../components/ShareButton/ShareButton";
import { NewsPostPropsType } from "../../../../types/types";

import { LikesBlock } from "./LikesBlock/LikesBlock";
import { LearnMore } from "./LearnMore/LearnMore";

export const NewsPost: React.FC<NewsPostPropsType> = ({
  id,
  title,
  body,
  likes,
  dislikes,
  additionalText1,
  additionalText2,
  postDate,
  views,
}) => {
  const { t } = useTranslation();

  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <Divider sx={{ m: 2 }}>
        <Typography variant="subtitle1">{t("next")}</Typography>
      </Divider>
      <Card
        sx={{
          position: "relative",
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
            {t(postDate)}
          </Typography>
        </Box>
        <Box sx={{ m: 2, display: "flex", alignItems: "center" }}>
          <RemoveRedEyeIcon fontSize="small" color="secondary" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
            {views}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <LikesBlock likes={likes} dislikes={dislikes} />
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
            <ShareButton />
            <LearnMore expanded={expanded} setExpanded={setExpanded} />
          </CardActions>
        </Box>
      </Card>
    </>
  );
};
