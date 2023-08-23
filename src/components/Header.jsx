import { Box, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../utilities/theme";
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t } = useTranslation();
  return (
    <Box p={4} display="flex" flexDirection="column">
      <Typography variant="h2" fontWeight={"bold"} color={colors.grey[200]}>
        {t(title)}
      </Typography>
      <Typography pt={1} variant="h6" color={colors.greenAccent[400]}>
        {t(subtitle)}
      </Typography>
    </Box>
  );
};

export default Header;
