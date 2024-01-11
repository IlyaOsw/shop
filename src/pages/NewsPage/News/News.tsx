import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsPost from "./NewsPost/NewsPost";
import { Box } from "@mui/material";

const News: React.FC = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setNews(response.data);
    };
    getNews();
  }, []);

  return (
    <Box>
      {news
        .filter((post: any) => post.id <= 3)
        .map((post: any) => (
          //@ts-ignore
          <NewsPost key={post.id} post={post} />
        ))}
    </Box>
  );
};

export default News;
