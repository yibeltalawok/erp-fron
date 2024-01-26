import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import { ThemeToggleProvider } from "./contexts/ThemeContext";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import store from "./config/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ThemeToggleProvider>
    <CssBaseline />
    <Router>
      <Suspense
        fallback={
          <div className="mt-10 text-3xl font-bold text-center">Loading...</div>
        }
      >
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </Router>
  </ThemeToggleProvider>
  // </React.StrictMode>
);
