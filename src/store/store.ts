
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import songsSlice  from "./features/musicSlice";
import rootSaga from "./saga/RootSaga";
import { persistStore } from 'redux-persist'; // Import persistStore from redux-persist
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    songs:songsSlice
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
