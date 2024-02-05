import { Box } from "@mui/material";
import React from "react";
import { ClientInfo } from "./ClientInfo/ClientInfo";
import { useSelector } from "react-redux";
import { ClientsType } from "../../../redux/reducers/clients-reducer";

export const Clients: React.FC = React.memo(() => {
  const clientsData = useSelector(
    (state: { clients: ClientsType }) => state.clients
  );
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        mt: 4,
      }}
    >
      {clientsData.map((user: any) => (
        //@ts-ignore
        <ClientInfo key={user.id} user={user} />
      ))}
    </Box>
  );
});
