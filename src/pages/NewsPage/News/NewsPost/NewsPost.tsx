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

//@ts-ignore
const NewsPost: React.FC = ({ post }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: " space-around" }}>
      <Card
        sx={{
          width: "75%",
          m: 2,
          display: "flex",
          justifyContent: " space-around",
          position: " relative",
          flexWrap: "wrap",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="400"
          image={`${process.env.PUBLIC_URL}/Images/News/news3.jpg`}
          sx={{ width: "100%" }}
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
        <CardActions>
          <FormDialog />
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default NewsPost;
