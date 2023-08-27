import {
  AiFillDashboard,
  AiOutlineShopping,
  AiOutlineStock,
} from "react-icons/ai";
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { MdOutlineCrisisAlert } from "react-icons/md";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { FaHandsHelping, FaTruckMoving } from "react-icons/fa";
import Dashboard from "../features/Dashboard";
import Sales from "../features/Sales";
import Purchases from "../features/Purchases";
import Stocks from "../features/Stocks";
import Suppliers from "../features/Suppliers";
import Clients from "../features/Clients";
import AddPurchases from "../features/Purchases/add";
import PurchasesTable from "../features/Purchases/table";
import SalesTable from "../features/Sales/table";
import SalesAdd from "../features/Sales/add";

export default [
  {
    id: 1,
    title: "dashboard",
    path: "/",
    icon: <AiFillDashboard style={{ fontSize: 22 }} />,
    component: <Dashboard />,
  },
  {
    id: 2,
    title: "sales",
    path: "/sales",
    icon: <MdOutlineCrisisAlert style={{ fontSize: 22 }} />,
    component: <Sales />,
    children: [
      {
        id: 21,
        title: "add-sales",
        path: "/sales/add",
        icon: <AiOutlineShopping style={{ fontSize: 22 }} />,
        component: <SalesAdd />,
      },
      {
        id: 22,
        title: "table-sales",
        path: "/sales/table",
        icon: <AiOutlineShopping style={{ fontSize: 22 }} />,
        component: <SalesTable />,
      },
    ],
  },
  {
    id: 3,
    title: "purchases",
    path: "/purchases",
    icon: <AiOutlineShopping style={{ fontSize: 22 }} />,
    component: <Purchases />,
    children: [
      {
        id: 11,
        title: "add-purchases",
        path: "/purchases/add",
        icon: <AiOutlineShopping style={{ fontSize: 22 }} />,
        component: <AddPurchases />,
      },
      {
        id: 12,
        title: "table-purchases",
        path: "/purchases/table",
        icon: <AiOutlineShopping style={{ fontSize: 22 }} />,
        component: <PurchasesTable />,
      },
    ],
  },
  {
    id: 4,
    title: "stocks",
    path: "/stocks",
    icon: <AiOutlineStock style={{ fontSize: 22 }} />,
    component: <Stocks />,
  },
  {
    id: 5,
    title: "suppliers",
    path: "/suppliers",
    icon: <FaTruckMoving style={{ fontSize: 22 }} />,
    component: <Suppliers />,
  },
  {
    id: 6,
    title: "clients",
    path: "/clients",
    icon: <BsFillPeopleFill style={{ fontSize: 22 }} />,
    component: <Clients />,
  },
];
