import {takeLatest } from "redux-saga/effects";
import { handleGetSong, handleDeleteSong, handleAddSong, handleUpdateSong } from "./handlers/user";
import { getUser, deleteSong, addSong, updateSong } from "../ducks/songSlice";

export function* watcherSaga() {
  yield takeLatest(getUser.type, handleGetSong);
  yield takeLatest(deleteSong.type, handleDeleteSong);
  yield takeLatest(addSong.type, handleAddSong);
  yield takeLatest(updateSong.type, handleUpdateSong);
}
