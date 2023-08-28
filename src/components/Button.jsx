import { useTheme, Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { tokens } from "../utilities/theme";
import LoadingButton from "@mui/lab/LoadingButton";

const Btn = ({ onClick, title, type = "contained", ...props }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <LoadingButton
      variant={type}
      onClick={onClick}
      sx={{
        color: colors.grey[100],
        background: `linear-gradient(65deg, ${colors.greenAccent[600]} 50%, ${colors.greenAccent[700]} 90%)`,
        textTransform: "none",
        "&:hover": {
          background: `linear-gradient(45deg, ${colors.greenAccent[600]} 30%, ${colors.greenAccent[700]} 90%)`,
        },
      }}
      {...props}
    >
      {t(title)}
    </LoadingButton>
  );
};

export default Btn;
