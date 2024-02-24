import { call, fork, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  LoadingState,
  addSong,
  deleteSong,
  loadAllSongs,
  loadStatistics,
  toggleFavorite,
  updateSong
} from '../features/musicSlice';
import { 
  getSongsAPI,
  addSongAPI, 
  deleteSongAPI, 
  updateSongAPI, 
  toggleFavoriteAPI, 
  getStatisticsAPI } from '../../apis';
import { 
  TOGGLE_FAVORITE_BY_ID,
  DELETE_SONG_BY_ID, 
  GET_ALL_SONGS, 
  CREATE_SONG,
  UPDATE_SONG_BY_ID, 
  GET_STATISTICS } from '../../types/redux.type';
import { Song, UserData,} from '../../types/data.type';
const userDataString = localStorage.getItem('userData');
  const userData: UserData = userDataString ? JSON.parse(userDataString) : null

interface Action {
  id:string,
  song:Song,
  type:string,
}

interface UserAction {
  type:string,
  username:string
}
function* addSongSaga(action:Action) {
  try {
    
   console.log(action.song);
    const response: AxiosResponse = yield addSongAPI(action.song)
    yield put(addSong(response.data.song));
    yield getAllSongsSaga({type:GET_STATISTICS, username:userData.username})

  } catch (error) {
    console.log(error);
  }
}

function* deleteSongSaga(action:Action) {  
  try { 
    yield deleteSongAPI(action.id)
    yield put(deleteSong(action.id));
   // if(userData) yield  getStatisticsAPI(userData.username)
  } catch (error) {
    console.log(error);
  }
}

function* updateSongSaga(action:Action) {
  try {
    yield updateSongAPI(action.song)
    yield put(updateSong(action.song));
  } catch (error) {
    console.log(error);
  }
}

function* getAllSongsSaga(action:UserAction) {
  try {
    const response: AxiosResponse = yield getSongsAPI(action.username)
    yield put(loadAllSongs(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* getStatSaga(action:UserAction) {
  try {
    const response: AxiosResponse = yield getStatisticsAPI(action.username)
    yield put(loadStatistics(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* toggleFavoriteSaga(action:Action) { 
   console.log("saga id",action.id);
  try {
    yield put(LoadingState(true))
    const response:AxiosResponse  = yield toggleFavoriteAPI(action.id)
    console.log(response);
    yield put(toggleFavorite(action.id));

  } catch (error) {
    console.log(error);
  }
}



export function* songSaga() {
  yield takeLatest(CREATE_SONG, addSongSaga);
  yield takeLatest(DELETE_SONG_BY_ID, deleteSongSaga);
  yield takeLatest(UPDATE_SONG_BY_ID, updateSongSaga);
  yield takeLatest(GET_ALL_SONGS, getAllSongsSaga);
  yield takeLatest(GET_STATISTICS, getStatSaga);
  yield takeLatest(TOGGLE_FAVORITE_BY_ID, toggleFavoriteSaga);
}
