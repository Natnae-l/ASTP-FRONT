import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    getUser() {},
    deleteSong(state, action: PayloadAction<{id: string}>){
      console.log(state, action);
      
    },
    addSong(state, action: PayloadAction<{Title: string, Album: string, Genre: string, Artist: string}>){
      console.log(state, action);
    },
    updateSong(state, action: PayloadAction<{Title: string, Album: string, Genre: string, Artist: string, id: string}>){
      console.log(state, action);
    },
    setUser(state, action: PayloadAction<object>) {
      const userData = action.payload;
      // state = userData;
      return {...state, ...userData };
    }
  }
});

export const { getUser, setUser, deleteSong, addSong, updateSong } = userSlice.actions;

export default userSlice.reducer;
