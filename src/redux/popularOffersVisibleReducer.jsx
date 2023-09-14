import { createSlice } from "@reduxjs/toolkit";

const initialPopularOffersVisibleState = { visible: false };

export const popularOffersVisibleSlice = createSlice({
  name: "popularOffersVisible",
  initialState: initialPopularOffersVisibleState,
  reducers: {
    visible: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { visible } = popularOffersVisibleSlice.actions;

export default popularOffersVisibleSlice.reducer;
