import React, { StrictMode, useEffect } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import store from "./store.js";

import './styles/styles.css';

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.js";

const DynamicFavicons = () => {
  useEffect(() => {
    // Function to update or create a new favicon link element
    const updateFavicon = (rel, type, sizes, href) => {
      let link = document.querySelector(`link[rel='${rel}'][sizes='${sizes}']`);
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        link.sizes = sizes;
        link.type = type;
        document.getElementsByTagName('head')[0].appendChild(link);
      }
      link.href = href;
    };

    // Define the favicons
    const favicons = [
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/images/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' }
    ];

    // Update or create favicon links
    favicons.forEach(icon => {
      updateFavicon(icon.rel, icon.type, icon.sizes, icon.href);
    });
  }, []);

  return null;
};

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <StrictMode>
      <DynamicFavicons />
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);