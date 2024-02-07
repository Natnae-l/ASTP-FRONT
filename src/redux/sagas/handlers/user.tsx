import { call, put } from "redux-saga/effects";
import { setUser } from "../../ducks/songSlice";
import { requestGetUser } from "../requests/user";
import { PayloadAction } from "@reduxjs/toolkit";

export function* handleGetSong(action: PayloadAction<object>): any {
  try {
    const response: any = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
