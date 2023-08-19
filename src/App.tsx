import { useEffect, useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";

import { Layout, Menu, theme } from "antd";
import React from "react";
import routes from "./utilities/Routes";
import { useTranslation } from "react-i18next";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  // const [count, setCount] = useState(0);
  // const ipcRenderer = (window as any).ipcRenderer;
  // const getData = () => {
  //   ipcRenderer.send("get_data", { productId: 1 });
  // };

  // useEffect(() => {
  //   ipcRenderer.on("get_data", (event, data) => {
  //     console.log("args from main", event, data);
  //     setCount(data);
  //   });
  // }, []);
  const { t } = useTranslation();
  return (
    <div className="font-[poppins] w-full">
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Menu
            className="bg-[#1a1a1a] h-[100vh] font-[cairo,poppins]"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={(e) => console.log(e)}
            items={routes.map((r) => ({ ...r, label: t(r.label) }))}
          />
        </Sider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
