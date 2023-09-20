import { createSlice } from "@reduxjs/toolkit";
import { useRef } from "react";

// const initialRefState = {
//   ref0: null,
//   ref1: null,
//   ref2: null,
//   refStatus: null,
//   start: true,
// };

// export const refSlice = createSlice({
//   name: "ref",
//   initialState: initialRefState,
//   reducers: {
//     setRef0: (state, action) => {
//       state.ref0 = action.payload;
//     },
//     setRef1: (state, action) => {
//       state.ref1 = action.payload;
//     },
//     setRef2: (state, action) => {
//       state.ref2 = action.payload;
//     },
//     setRefStatus: (state, action) => {
//       state.refStatus = action.payload;
//     },
//     setStart: (state, action) => {
//       state.start = action.payload;
//     },
//   },
// });

// export const { setRef0, setRef1, setRef2, setRefStatus, setStart } =
//   refSlice.actions;

const initialRefState = { start: true, refStatus: null };

export const refSlice = createSlice({
  name: "ref",
  initialState: initialRefState,
  reducers: {
    setStart: (state, action) => {
      state.start = action.payload;
    },
    setRefStatus: (state, action) => {
      state.refStatus = action.payload;
    },
  },
});

export const { setStart, setRefStatus } = refSlice.actions;

export default refSlice.reducer;
