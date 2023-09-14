import { configureStore } from "@reduxjs/toolkit";
import popularOffersVisibleReducer from "./popularOffersVisibleReducer";

export const store = configureStore({
  reducer: { popularOffersVisible: popularOffersVisibleReducer },
});
