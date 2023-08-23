import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { mockDataTeam } from "../data/mockData";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../utilities/theme";

const MainTable = ({ columns, indexRequest, filters }) => {
  const [rows, setRows] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  useEffect(() => {
    //calling to an api
    setRows(mockDataTeam);
  }, []);
  return (
    <Box
      height="75vh"
      p={4}
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
          boxShadow: `0px 4px 10px ${
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.1)"
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
      }}
    >
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};

export default MainTable;
