
import { all } from 'redux-saga/effects';
import { songSaga } from './SongSaga';


export default function* rootSaga() {
  yield all([
    songSaga(),
  ]);
}
