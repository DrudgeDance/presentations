import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import NotFound from "../components/NotFound/NotFound.js";
import Error from "../components/NotFound/Error.js";

import App from "../App.js";
import WatchLive1 from "../components/TheSciencingChallenge/WatchLiveWelcome.js";
import WatchLiveProtected from "../components/TheSciencingChallenge/WatchLiveProtected.js";
import ProtectedRoute from "./ProtectedRoute.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // Main App component
    errorElement: <Error />,
    children: [
      {
        path: "watchlive",
        element: <WatchLive1 />,
      },
      {
        path: "watchliveprotected",
        element: (
          <ProtectedRoute allowedRoles={['admin', 'user']}>
            <WatchLiveProtected />
          </ProtectedRoute>
        ),
      },
      {
        path: "error",
        element: <Error />, // Specific route for error
      },
      {
        path: "notfound",
        element: <NotFound />, // Specific route for not found
      },
      {
        path: "*",
        element: <NotFound />, // Catch-all should be last
      }
    ],
  },
]);