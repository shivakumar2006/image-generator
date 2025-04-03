import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // Add RTK Query API reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(apiSlice.middleware), // Add RTK query middleware...
})