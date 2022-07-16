import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { AddressContextProvider } from "./context/AddressContext";
import { BrandContextProvider } from "./context/BrandContext";
import { UrlContextProvider } from "./context/Url";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <AddressContextProvider>
          <BrandContextProvider>
            <UrlContextProvider>
              <App />
            </UrlContextProvider>
          </BrandContextProvider>
        </AddressContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
