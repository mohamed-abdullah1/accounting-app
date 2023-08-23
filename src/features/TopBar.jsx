import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext, tokens } from "../utilities/theme";
import { LightModeOutlined, SearchOutlined } from "@mui/icons-material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useTranslation } from "react-i18next";
import arImg from "../assets/locals/ar.png";
import enImg from "../assets/locals/en.png";
const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { i18n, t } = useTranslation();

  //helpers
  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH CONTAINER */}
      <Box bgcolor={colors.primary[400]} borderRadius={2}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder={t("search")} />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlined />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display="flex">
        <IconButton type="button" onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton type="button" onClick={handleLanguageChange}>
          <Box>
            <img
              src={i18n.language === "en" ? enImg : arImg}
              width="30"
              height="30"
              style={{ objectFit: "cover" }}
            />
          </Box>
        </IconButton>
        {/* <IconButton type="button">
          <AccountCircleOutlinedIcon />
        </IconButton>
        <IconButton type="button">
          <SettingsOutlinedIcon />
        </IconButton> */}
      </Box>
    </Box>
  );
};

export default TopBar;
