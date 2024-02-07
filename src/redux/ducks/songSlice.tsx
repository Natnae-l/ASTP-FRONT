import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    getUser(state) {
      return state
    },
    setUser(state, action: PayloadAction<object>) {
      const userData = action.payload;
      return { ...state, ...userData };
    }
  }
});

export const { getUser, setUser } = userSlice.actions;

export default userSlice.reducer;
