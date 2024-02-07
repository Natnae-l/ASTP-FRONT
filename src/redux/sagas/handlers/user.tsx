import { call, put } from "redux-saga/effects";
import { setUser } from "../../ducks/songSlice";
import { requestGetUser, requestdeleteSong, requestAddSong } from "../requests/user";
import { PayloadAction } from "@reduxjs/toolkit";

export function* handleGetSong(action: PayloadAction<object>): any {
  try {
    const response: any = yield call(requestGetUser);
    yield put(setUser({...response}));
  } catch (error) {
    console.log(error);
  }
}
 
export function* handleDeleteSong(action: PayloadAction<{id: string}>): any {
    try {
        const response: any = yield call(requestdeleteSong, action.payload.id);
        const { data } = response;
        
        if (data) {
            const res: any = yield call(requestGetUser);
            // const { data } = res;
            console.log(res)
            return yield put(setUser({ ...res}));
        }
    } catch (error) {
      console.log(error);
    }
  }

  export function* handleAddSong(action: PayloadAction<{Title: string, Album: string, Genre: string, Artist: string}>): any {
    try {
        const response: any = yield call(requestAddSong, action.payload);

        const res: any = yield call(requestGetUser);
        // const { data } = res;
        console.log(res)
        return yield put(setUser({ ...res}));
    } catch (error) {
      console.log(error);
    }
  }
