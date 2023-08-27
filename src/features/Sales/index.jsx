import React from "react";
import MainTable from "../../components/MainTable";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { FaTruckMoving } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Sales = () => {
  console.log("here");
  return (
    <Box>
      <Header title={"sales"} subtitle={"sales_subtitle"} />
      <Outlet />
    </Box>
  );
};

export default Sales;
