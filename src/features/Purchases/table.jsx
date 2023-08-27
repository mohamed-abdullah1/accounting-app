import React from "react";
import Btn from "../../components/Button";
import { useNavigate } from "react-router-dom";

const PurchasesTable = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Btn
        title="add"
        onClick={() => {
          navigate("/purchases/add");
        }}
      />
    </div>
  );
};

export default PurchasesTable;
