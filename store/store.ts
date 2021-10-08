import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reducer from "../store/reducers";
import progressMiddleware from "../middleware/progress";
//import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ immutableCheck: false }).concat(progressMiddleware),
    devTools: process.env.NODE_ENV !== `production`,
  });
  /*
export const store = configureStore({
  reducer: {
    //counter: counterReducer,
  },
});*/

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;