import React from "react";
import Btn from "../../components/Button";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
const Purchases = () => {
  const navigate = useNavigate();
  // const location = useLocation
  return (
    <div>
      <Header title="purchases" subtitle={"purchases_subtitle"} />
      <Outlet />
    </div>
  );
};

export default Purchases;
