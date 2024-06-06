// src/index.js
import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import store from "./store.js";

import './styles/styles.css';

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />   
    </StrictMode>
  </Provider>
);
