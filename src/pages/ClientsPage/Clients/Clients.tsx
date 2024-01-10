import styles from "./Clients.module.scss";
import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ClientInfo from "./ClientInfo/ClientInfo";

const Clients = () => {
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
    <Box className={styles.clients}>
      {ourClients.map((user: any) => (
        <ClientInfo key={user.id} user={user} />
      ))}
    </Box>
  );
};

export default Clients;
