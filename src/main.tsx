import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./assets/fonts/fonts.css";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locals/{{lng}}/{{ns}}.json", // Path pattern for translation files
    },
    lng: "ar", // default language
    fallbackLng: "ar", // fallback language
    interpolation: {
      escapeValue: false, // react already escapes by default
    },
  });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
