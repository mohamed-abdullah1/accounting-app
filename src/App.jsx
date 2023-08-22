import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./utilities/theme";
import TopBar from "./features/TopBar";
import SideBar from "./features/SideBar";

function App() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [theme, colorMode] = useMode();
  // useEffect(() => {
  //   fetch("http://localhost:2000/api")
  //     .then((response) => {
  //       // Check if the response status is OK (200)
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       // Parse the response JSON
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // Handle the data from the response
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       // Handle errors
  //       console.error("Fetch error:", error);
  //     });
  // }, []);
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

  //helpers
  // const sideItemClickHandler = (e) => {
  //   navigate(routes.find((r) => r.key == e.key).path);
  // };
  //side-effects
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TopBar />
          <SideBar />
          <Routes></Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
