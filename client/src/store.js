import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./features/modal/modalSlice.js";
import watchCodeReducer from './features/watchCode/watchCodeSlice.js';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    watchCode: watchCodeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
    ),
  devTools: true,
});

export default store;