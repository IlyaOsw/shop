import Box from "@mui/material/Box";

export const Image: React.FC = () => {
  return (
    <Box
      sx={{
        mt: 5,
        position: "relative",
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/Images/Clients/clientsImage.jpg`}
        alt="clientsImage"
        style={{ maxHeight: "500px", width: "100%" }}
      />
    </Box>
  );
};
