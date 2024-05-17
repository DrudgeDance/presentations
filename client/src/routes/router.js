import * as React from "react";
import { createBrowserRouter } from "react-router-dom";



import NotFound from "../pages/NotFound/NotFound.js";
import Error from "../pages/NotFound/Error.js";

import About from "../pages/Presenters/Presenters.js";
import Contact from "../pages/Contact/Contact.js";

import Register from "../pages/Login/Register.js";

import PresentationPage from "../pages/Presentation/PresentationPage.js";
import App from "./../App.js"

import ProtectedRoute from "./ProtectedRoute.js"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,                     // ENTRY POINT FOR <APP>
    errorElement: <Error />,
    children: [
      { path: "*", element: <NotFound /> },
      {
        index: true,
        element: <About />,
      },
      {
        path: "contact",
        element: (
          <ProtectedRoute allowedRoles={['user']}>
            <Contact />
          </ProtectedRoute>
        ), 
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "presentation",
        element: (
          <ProtectedRoute allowedRoles={['user']}>
            <PresentationPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
