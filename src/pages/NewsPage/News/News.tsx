import React, { useState } from "react";
import { NewsPost } from "./NewsPost/NewsPost";
import { Box, Button, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { NewsType } from "../../../redux/reducers/news-reducer";
import { useTranslation } from "react-i18next";

export type NewsPostPropsType = {
  id: number;
  title: string;
  body: string;
  likes: number;
  dislikes: number;
  additionalText1: string;
  additionalText2: string;
  postDate: string;
};

export const News: React.FC = () => {
  const { t } = useTranslation();
  const newsData = useSelector((state: { news: NewsType }) => state.news);
  const [posts, setPosts] = useState(3);
  const showMorePosts = () => {
    setPosts((prevPosts) => prevPosts + 3);
  };
  const initialPosts = newsData.slice(0, posts);

  return (
    <>
      {initialPosts.map((post: NewsPostPropsType) => (
        <NewsPost key={post.id} {...post} />
      ))}
      <Box sx={{ display: "flex", justifyContent: "center", margin: "50px" }}>
        {posts < newsData.length && (
          <Tooltip title={t("showMorePosts")} arrow>
            <Button variant="contained" onClick={showMorePosts}>
              {t("showMorePosts")}
            </Button>
          </Tooltip>
        )}
      </Box>
    </>
  );
};
