import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";

const images = [
  {
    id: 0,
    url: `${process.env.PUBLIC_URL}/Images/News/news1.jpg`,
  },
  {
    id: 1,
    url: `${process.env.PUBLIC_URL}/Images/News/news2.jpg`,
  },
  {
    id: 2,
    url: `${process.env.PUBLIC_URL}/Images/News/news3.jpg`,
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 450,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 250,
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
});

export const Images: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {images.map((image) => (
        <ImageButton
          disableRipple
          key={image.id}
          sx={{ m: 0.3, width: "33%", cursor: "default" }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
        </ImageButton>
      ))}
    </Box>
  );
};
