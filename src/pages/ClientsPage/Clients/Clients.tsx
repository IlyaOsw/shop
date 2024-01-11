import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ClientInfo from "./ClientInfo/ClientInfo";

const Clients: React.FC = () => {
  const [ourClients, setOurClients] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setOurClients(response.data);
    };
    getClients();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        mt: 5,
      }}
    >
      {ourClients
        .filter((user: any) => user.id <= 5)
        .map((user: any) => (
          <ClientInfo key={user.id} user={user} />
        ))}
    </Box>
  );
};

export default Clients;
