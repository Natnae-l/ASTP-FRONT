import { takeLatest } from "redux-saga/effects";
import { handleGetSong } from "./handlers/user";
import { getUser } from "../ducks/songSlice";

export function* watcherSaga() {
  yield takeLatest(getUser.type, handleGetSong);
}
