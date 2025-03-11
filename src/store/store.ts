import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../components/Main/newsSlice";
import { newsApi } from "./api";


export const store = configureStore({
    reducer: {
        news: newsReducer,
        [newsApi.reducerPath]: newsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }).concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;