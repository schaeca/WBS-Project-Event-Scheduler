import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import LocationProvider from "./Context/LocationProvider.jsx";
import NavigationProvider from "./Context/NavigationProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LocationProvider>
        <NavigationProvider>
        <App />
        </NavigationProvider>
      </LocationProvider>
    </BrowserRouter>
  </StrictMode>,
);
