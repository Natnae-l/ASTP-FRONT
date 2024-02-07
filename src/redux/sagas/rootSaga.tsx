import { takeLatest } from "redux-saga/effects";
import { handleGetSong, handleDeleteSong } from "./handlers/user";
import { getUser, deleteSong } from "../ducks/songSlice";

export function* watcherSaga() {
  yield takeLatest(getUser.type, handleGetSong);
  // yield takeLatest(deleteSong.type, handleDeleteSong);
}
