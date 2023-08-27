import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <Box>
      <Header title={"dashboard"} subtitle={"dashboard_subtitle"} />
      <Outlet />
    </Box>
  );
};

export default Dashboard;
