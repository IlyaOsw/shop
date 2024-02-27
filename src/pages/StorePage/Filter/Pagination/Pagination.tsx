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
      }}
    >
      <Pagination
        count={Math.ceil(products.length / productsPerPage)}
        color="secondary"
        onChange={(event, page) => handlePage(page)}
      />
    </Box>
  );
};
