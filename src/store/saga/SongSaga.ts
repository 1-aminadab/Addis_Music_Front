// songSaga.ts

import { call, fork, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  addSong,
  deleteSong,
  loadAllSongs,
  loadStatistics,
  toggleFavorite,
  updateSong
} from '../features/musicSlice';
import { Song } from '../../types/data.type';
import { PayloadAction } from '@reduxjs/toolkit';

function* addSongSaga(action: PayloadAction<Song>) {
  try {
    const newSong = action.payload;
    const response:AxiosResponse = yield call(() =>
      axios.post('http://localhost:3000/songs', newSong)
    );
    yield put(addSong(response.data.song));
  } catch (error) {
    console.log(error);
  }
}

function* deleteSongSaga(action: PayloadAction<string>) {
  try {
    const id = action.payload;
    yield call(() =>
      axios.delete(`http://localhost:3000/songs/${id}`)
    );
    yield put(deleteSong(id));
  } catch (error) {
    console.log(error);
  }
}

function* updateSongSaga(action: PayloadAction<{ id: string, newSong: Song }>) {
  try {
    const { id, newSong } = action.payload;
    yield call(() =>
      axios.put(`http://localhost:3000/songs/${id}`, newSong)
    );
    yield put(updateSong(newSong));
  } catch (error) {
    console.log(error);
  }
}

function* getAllSongsSaga() {
  try {
    const response:AxiosResponse = yield call(() =>
      axios.get('http://localhost:3000/songs')
    );
    yield put(loadAllSongs(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* getStatSaga() {
  try {
    const response:AxiosResponse = yield call(() =>
      axios.get('http://localhost:3000/songs/stat')
    );
    yield put(loadStatistics(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* toggleFavoriteSaga(action: PayloadAction<string>) {
  try {
    const songId = action.payload;
    const response: AxiosResponse = yield fork(() =>
      axios.patch(`http://localhost:3000/songs/${songId}/toggle-favorite`)
    );
    yield put(toggleFavorite(songId));
  } catch (error) {
    console.log(error);
  }
}



export function* songSaga() {
  yield takeLatest('songs/addSong', addSongSaga);
  yield takeLatest('songs/deleteSong', deleteSongSaga);
  yield takeLatest('songs/updateSong', updateSongSaga);
  yield takeLatest('songs/getAllSongs', getAllSongsSaga);
  yield takeLatest('songs/getStat', getStatSaga);
  yield takeLatest('songs/toggleFavorite', toggleFavoriteSaga);
}
