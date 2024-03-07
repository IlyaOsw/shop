import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import { ClientsType } from "../../../redux/reducers/clients-reducer";

import { ClientInfo } from "./ClientInfo/ClientInfo";

export const Client: React.FC = () => {
  const clientsData = useSelector(
    (state: { clients: ClientsType }) => state.clients
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {clientsData.map((user) => (
        <ClientInfo key={user.id} user={user} />
      ))}
    </Box>
  );
};
