import { Box, Pagination } from "@mui/material";
import React from "react";

import { CustomPaginationPropsType } from "../../../../types/types";

export const CustomPagination: React.FC<CustomPaginationPropsType> = ({
  products,
  productsPerPage,
  handlePage,
}) => {
  return (
    <Box
      sx={{
        m: 5,
        display: "flex",
        justifyContent: "center",
        "& .MuiPaginationItem-page, & .MuiPaginationItem-previous, & .MuiPaginationItem-next":
          {
            color: "#c0c0c0", // Замените "your_desired_color" на цвет, который вы хотите использовать
          },
        "& .MuiPaginationItem-icon": {
          color: "#0288d1",
        },
      }}
    >
      <Pagination
        count={Math.ceil(products.length / productsPerPage)}
        color="primary"
        onChange={(event, page) => handlePage(page)}
      />
    </Box>
  );
};
