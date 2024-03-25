import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useTranslation } from "react-i18next";

import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  "& .MuiInputLabel-root": {
    color: "#a6a6a6",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#a6a6a6",
    },
  },
});

export const Information = () => {
  const { t } = useTranslation();

  const accountLabels: { id: number; label: string; placeholder: string }[] = [
    { id: 0, label: "name", placeholder: "enterName" },
    { id: 1, label: "surname", placeholder: "enterSurname" },
    { id: 2, label: "birthDate", placeholder: "enterBirthDate" },
    { id: 3, label: "country", placeholder: "enterCountry" },
    { id: 4, label: "city", placeholder: "enterCity" },
    { id: 5, label: "phoneNumber", placeholder: "enterPhone" },
    { id: 6, label: "email", placeholder: "enterMail" },
  ];

  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        height: "100%",
        width: "100%",
        maxWidth: "700px",
      }}
    >
      <Table>
        <TableBody>
          {accountLabels.map((item) => (
            <TableRow key={item.id}>
              <TableCell sx={{ color: "#a6a6a6" }}>{t(item.label)}</TableCell>
              <TableCell>
                <CustomTextField
                  fullWidth
                  id="fullWidth"
                  label={t(item.placeholder)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
