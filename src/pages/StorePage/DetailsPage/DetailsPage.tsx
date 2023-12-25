import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./DetailsPage.module.scss";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { accessories } from "../Card/StorePageCard";

const DetailsPage: React.FC = () => {
  const { t } = useTranslation();
  const { description } = useParams<{ description: string }>();

  const selectedItem = accessories.find(
    (item) => item.description === description
  );

  if (!selectedItem) {
    return <div>Товар не найден</div>;
  }

  return (
    <div className={styles.test}>
      <Typography variant="h1">YOYOYOYOY</Typography>
      <h2>{selectedItem.title}</h2>
      <p>{selectedItem.price}</p>
      <p>{t(selectedItem.description)}</p>
    </div>
  );
};

export default DetailsPage;
