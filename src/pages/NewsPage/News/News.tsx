import React, { useState } from "react";
import NewsPost from "./NewsPost/NewsPost";
import { Box, Button, Tooltip } from "@mui/material";
import { t } from "i18next";
import { useSelector } from "react-redux";
import { NewsType } from "../../../redux/reducers/news-reducer";

export interface NewsPostProps {
  id: number;
  title: string;
  body: string;
  likes: number;
  dislikes: number;
}

const News: React.FC = () => {
  const newsData = useSelector((state: { news: NewsType }) => state.news);

  const [show, setShow] = useState(false);

  function showOlderPosts() {
    setShow(true);
  }

  return (
    <Box>
      {newsData
        .filter((post: NewsPostProps) => post.id <= 2)
        .map((post: NewsPostProps) => (
          <NewsPost key={post.id} {...post} />
        ))}

      {show && (
        <Box>
          {newsData
            .filter((post: NewsPostProps) => post.id > 2)
            .map((post: NewsPostProps) => (
              <NewsPost key={post.id} {...post} />
            ))}
        </Box>
      )}
      <Box sx={{ display: "flex", justifyContent: "center", margin: "50px" }}>
        <Tooltip title="Show older posts" arrow>
          <Button variant="contained" onClick={showOlderPosts}>
            Show older posts
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default News;
