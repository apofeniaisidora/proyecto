import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/userContext.jsx";
import ServiceProvider from "./context/ServiceContext.jsx";
import FavoritosProvider from "./context/FavoritosContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ServiceProvider>
        <FavoritosProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FavoritosProvider>
      </ServiceProvider>
    </UserProvider>
  </React.StrictMode>
);
