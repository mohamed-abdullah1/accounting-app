import { FiHome } from "react-icons/fi";
import { MdSell, MdAttachMoney, MdSupervisorAccount } from "react-icons/md";
import { LuStore } from "react-icons/lu";
import { BiLogoDocker } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import React from "react";

const iconStyle = {
  fontSize: 20,
};

export default [
  {
    key: 1,
    icon: React.createElement(FiHome, { style: iconStyle }),
    label: "main",
    path: "/",
  },
  {
    key: 2,
    icon: React.createElement(MdSell, { style: iconStyle }),
    label: "sales",
    path: "/sales",
  },
  {
    key: 3,
    icon: React.createElement(MdAttachMoney, { style: iconStyle }),
    label: "purchases",
    path: "/purchases",
  },
  {
    key: 4,
    icon: React.createElement(BiLogoDocker, { style: iconStyle }),
    label: "stocks",
    path: "/stocks",
  },
  {
    key: 5,
    icon: React.createElement(BsFillPersonFill, { style: iconStyle }),
    label: "clients",
    path: "/clients",
  },
  {
    key: 6,
    icon: React.createElement(MdSupervisorAccount, { style: iconStyle }),
    label: "suppliers",
    path: "/suppliers",
  },
];
