import { FiHome } from "react-icons/fi";
import { MdSell } from "react-icons/md";
import React from "react";
import i18n from "i18next";

export default [
  {
    key: 1,
    icon: React.createElement(FiHome),
    label: "main",
    path: "/",
  },
  {
    key: 2,
    icon: React.createElement(MdSell),
    label: "sales",
    path: "/sales",
  },
];
