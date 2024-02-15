
import { PersonSlice } from "./features/personSlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import songsSlice  from "./features/musicSlice";
import rootSaga from "./saga/RootSaga";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    person: PersonSlice.reducer,
    songs:songsSlice
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
