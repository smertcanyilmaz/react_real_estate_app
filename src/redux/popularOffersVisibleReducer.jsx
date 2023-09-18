import { createSlice } from "@reduxjs/toolkit";

const initialPopularOffersVisibleState = { visible: false, down: false };

export const popularOffersVisibleSlice = createSlice({
  name: "popularOffersVisible",
  initialState: initialPopularOffersVisibleState,
  reducers: {
    visible: (state) => {
      state.visible = !state.visible;
    },
    down: (state) => {
      state.down = true;
    },
  },
});

export const { visible, down } = popularOffersVisibleSlice.actions;

export default popularOffersVisibleSlice.reducer;
