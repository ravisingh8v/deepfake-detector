import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export default authSlice.reducer;
