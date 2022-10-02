import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./slices/counterSlice";
import userIdReducer from "./slices/userIdSlice";
import userNameReducer from "./slices/userNameSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userId: userIdReducer,
    userName: userNameReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;