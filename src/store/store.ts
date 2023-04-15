import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { chartReducer } from "./chartSlice";
import { productsApi } from "services/api";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["chart", "productsApi"],
};
const chartPersistConfig = {
  key: "chart",
  storage,
  whitelist: ["currentCategory"],
};
export const rootReducers = combineReducers({
  chart: persistReducer(chartPersistConfig, chartReducer),
  [productsApi.reducerPath]: productsApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(productsApi.middleware),
  devTools: true,
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;

export default store;
