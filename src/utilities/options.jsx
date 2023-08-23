import { AiFillDashboard, AiOutlineStock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineCrisisAlert } from "react-icons/md";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import Dashboard from "../features/Dashboard";
import Sales from "../features/Sales";
import Purchases from "../features/Purchases";
import Stocks from "../features/Stocks";
import Suppliers from "../features/Suppliers";
import Clients from "../features/Clients";

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
  },
  {
    id: 3,
    title: "purchases",
    path: "/purchases",
    icon: <BiSolidPurchaseTagAlt style={{ fontSize: 22 }} />,
    component: <Purchases />,
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
    icon: <FaHandsHelping style={{ fontSize: 22 }} />,
    component: <Suppliers />,
  },
  {
    id: 6,
    title: "clients",
    path: "/clients",
    icon: <BsFillPersonFill style={{ fontSize: 22 }} />,
    component: <Clients />,
  },
];
