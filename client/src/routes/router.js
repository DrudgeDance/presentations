import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import NotFound from "../components/NotFound/NotFound.js";
import Error from "../components/NotFound/Error.js";

import Register from "../components/WatchLive/Register.js";

import App from "./../App.js"

import ProtectedRoute from "./ProtectedRoute.js"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,                     // ENTRY POINT FOR <APP>
    errorElement: <Error />,
    children: [
      {
        path: "error",
        element: <Error />,                // Specific route for error
      },
      {
        path: "notfound",
        element: <NotFound />,             // Specific route for not found
      },
      { 
        path: "*", 
        element: <NotFound />              // Catch-all should be last
      }
    ],
  },
]);

