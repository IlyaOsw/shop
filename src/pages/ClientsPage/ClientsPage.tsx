import React from "react";
import styles from "./ClientsPage.module.scss";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";

const ClientsPage: React.FC = () => {
  return (
    <div className={styles.test}>
      <Stack direction="row" spacing={2}>
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      </Stack>
    </div>
  );
};

export default ClientsPage;
