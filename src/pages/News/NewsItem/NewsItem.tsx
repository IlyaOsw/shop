import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";

import { NewsType } from "../../../redux/reducers/news-reducer";

import { NewsPostPropsType } from "../../../types/types";

import { NewsPost } from "./NewsPost/NewsPost";

export const NewsItem: React.FC = () => {
  const { t } = useTranslation();
  const newsData = useSelector((state: { news: NewsType }) => state.news);
  const [posts, setPosts] = useState(3);

  const showMorePosts = () => setPosts((prevPosts) => prevPosts + 3);

  const initialPosts = newsData.slice(0, posts);

  return (
    <>
      {initialPosts.map((post: NewsPostPropsType) => (
        <NewsPost key={post.id} {...post} />
      ))}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {posts < newsData.length && (
          <Tooltip title={t("showMorePosts")} arrow>
            <Button
              variant="contained"
              color="info"
              onClick={showMorePosts}
              sx={{ mb: 5 }}
            >
              {t("showMorePosts")}
            </Button>
          </Tooltip>
        )}
      </Box>
    </>
  );
};
