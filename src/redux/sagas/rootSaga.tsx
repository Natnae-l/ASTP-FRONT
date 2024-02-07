import { takeEvery, takeLatest } from "redux-saga/effects";
import { handleGetSong, handleDeleteSong, handleAddSong } from "./handlers/user";
import { getUser, deleteSong, addSong } from "../ducks/songSlice";

export function* watcherSaga() {
  yield takeLatest(getUser.type, handleGetSong);
  yield takeLatest(deleteSong.type, handleDeleteSong);
  yield takeLatest(addSong.type, handleAddSong);
}
