import { configureStore } from "@reduxjs/toolkit";
import popularOffersVisibleReducer from "./popularOffersVisibleReducer";
import refReducer from "./refReducer";

export const store = configureStore({
  reducer: {
    popularOffersVisible: popularOffersVisibleReducer,
    ref: refReducer,
  },
});
