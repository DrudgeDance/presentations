import { configureStore } from "@reduxjs/toolkit";


import authReducer from "./features/auth/authSlice.js";
import { apiSlice } from "./features/api/http_apiSlice.js";

import { plantsApiSlice } from "./features/api/http_plantsApiSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [plantsApiSlice.reducerPath]: plantsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      plantsApiSlice.middleware,
    ),
  devTools: true,
});

export default store;