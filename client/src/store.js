import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./features/modal/modalSlice.js";
import wauthReducer from './features/wauth/wauthSlice.js';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    wauth: wauthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
    ),
  devTools: true,
});

export default store;