import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: "mapStatus",
  initialState: {
    mapStatus: false
  },
  reducers: {
    mapRefresh(state, { payload }) {
       state.mapStatus = payload
      },
   
}
});

export default mapSlice.reducer;

export const { mapRefresh } = mapSlice.actions;
