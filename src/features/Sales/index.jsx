import React from "react";
import MainTable from "../../components/MainTable";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Sales = () => {
  const { t } = useTranslation();
  const columns = [
    {
      field: "id",
      headerName: t("ID"),
      type: "number",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: t("email"),
      flex: 1,
    },
  ];

  return (
    <Box>
      <Header title={t("sales")} subtitle={t("sales_subtitle")} />
      <MainTable
        columns={[
          ...columns.map((col) => ({
            ...col,
            align: "center",
            headerAlign: "center",
          })),
        ]}
      />
    </Box>
  );
};

export default Sales;
