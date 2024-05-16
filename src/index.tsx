import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";
import "./assets/fonts/fonts.css";
import { FavoritesContextProvider } from "./context/favoritesContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <FavoritesContextProvider>
          <App />
        </FavoritesContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
