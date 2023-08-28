import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Btn from "./Button";

const FormButtons = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Box p={2} display="flex" justifyContent="center">
      <Btn
        loading={false}
        style={{ fontSize: 18, width: 200 }}
        type="submit"
        title="add"
        onClick={() => {}}
      />
      <Btn
        type="outlined"
        loading={false}
        style={{
          fontSize: 18,
          width: 100,
          margin: "0 10px",
          background: "transparent",
        }}
        title="cancel"
        onClick={goBack}
        color="cancelBtn"
      />
    </Box>
  );
};

export default FormButtons;
