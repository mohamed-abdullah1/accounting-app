import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useMemo, useState } from "react";
import { mockDataTeam } from "../data/mockData";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../utilities/theme";
import Button from "./Button";
import { IoMdAdd } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const MainTable = ({ columns, indexRequest, filters, addPath }) => {
  //variables & states
  const [rows, setRows] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const boxStyles = {
    "& .MuiDataGrid-root": {
      border: "none",
      boxShadow: `0px 4px 10px ${
        theme.palette.mode === "dark"
          ? "rgba(75, 75, 75, 0.211)"
          : "rgba(0, 0, 0, 0.1)"
      }`, // Adjust the values as needed
      borderRadius: "32px !important",
    },
    "& .MuiDataGrid-cell": {
      borderBottom: "none",
    },
    "& .name-column--cell": {
      color: colors.greenAccent[300],
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: colors.blueAccent[800],
      borderBottom: "none",
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: colors.primary[400],
    },
    "& .MuiDataGrid-footerContainer": {
      borderTop: "none",
      backgroundColor: colors.blueAccent[800],
      borderRadius: "0 0 16px 16px",
    },
    "& .MuiCheckbox-root": {
      color: `${colors.greenAccent[200]} !important`,
    },
    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
      color: `${colors.grey[100]} !important`,
    },
  };

  //helpers
  const handleAdd = () => navigate(addPath);

  //side-effects
  useEffect(() => {
    //calling to an api
    setRows(mockDataTeam);
  }, []);
  return (
    <Box height="75vh" p={4} sx={boxStyles}>
      <Box>
        <Button
          style={{ marginBottom: 16 }}
          title="add"
          onClick={handleAdd}
          // startIcon={<IoMdAdd />}
        />
      </Box>
      <DataGrid rows={rows} columns={columns} sx={{ width: "100%" }} />
    </Box>
  );
};

export default MainTable;
