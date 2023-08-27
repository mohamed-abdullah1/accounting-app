import React from "react";
import MainTable from "../../components/MainTable";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { FaTruckMoving } from "react-icons/fa";

const SalesTable = () => {
  const { t } = useTranslation();
  const columns = [
    {
      field: "id",
      headerName: t("ID"),
      type: "number",
      align: "center",
    },
    {
      field: "email",
      headerName: t("email"),
      flex: 1,
      renderCell: (params) => {
        return (
          <Typography variant="h6" textAlign={"start"}>
            {params.row.email}
          </Typography>
        );
      },
    },
    {
      field: "age",
      headerName: t("age"),
      flex: 1,
    },
    {
      field: "phone",
      headerName: t("phone"),
      flex: 1,
    },
    {
      field: "access",
      headerName: t("access"),
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <GridActionsCellItem
          icon={<FaTruckMoving />}
          onClick={() => console.log(params.row.id)} // Handle the action here
        />
      ),
    },
  ];

  return (
    <Box>
      <MainTable
        addPath={"/sales/add"}
        columns={[
          ...columns.map((col) => ({
            ...col,
            // align: "center",
            // headerAlign: "center",
          })),
        ]}
      />
    </Box>
  );
};

export default SalesTable;
