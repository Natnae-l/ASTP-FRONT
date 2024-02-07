import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    getUser() {},
    deleteSong(state, action: PayloadAction<{id: string}>){},
    addSong(state, action: PayloadAction<{Title: string, Album: string, Genre: string, Artist: string}>){},
    setUser(state, action: PayloadAction<object>) {
      const userData = action.payload;
      // state = userData;
      return {...state, ...userData };
    }
  }
});

export const { getUser, setUser, deleteSong, addSong } = userSlice.actions;

export default userSlice.reducer;
