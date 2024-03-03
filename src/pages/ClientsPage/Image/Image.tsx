import { Paper } from "@mui/material";

export const Image: React.FC = () => {
  return (
    <Paper
      elevation={6}
      sx={{
        mt: 5,
        position: "relative",
        height: "500px",
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/Images/Clients/clientsImage.jpg`}
        alt="clientsImage"
        style={{ maxHeight: "500px", width: "100%" }}
      />
    </Paper>
  );
};
