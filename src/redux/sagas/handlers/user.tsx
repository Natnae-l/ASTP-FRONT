import { call, put } from "redux-saga/effects";
import { setUser } from "../../ducks/songSlice";
import { requestGetUser, requestdeleteSong } from "../requests/user";
import { PayloadAction } from "@reduxjs/toolkit";

export function* handleGetSong(action: PayloadAction<object>): any {
  try {
    const response: any = yield call(requestGetUser);
    yield put(setUser({...response}));
  } catch (error) {
    console.log(error);
  }
}
 
export function* handleDeleteSong(action: PayloadAction<object>): any {
    try {
        const j = 'dcd';
        const response: any = yield call(requestdeleteSong, j);
        const { data } = response;
        if (data) {
            const response: any = yield call(requestGetUser);
            const { data } = response;
            return yield put(setUser({ ...data }));
        }
    } catch (error) {
      console.log(error);
    }
  }
