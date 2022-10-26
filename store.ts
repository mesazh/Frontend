import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import userIdReducer from "./slices/userIdSlice";
import userNameReducer from "./slices/userNameSlice";
import appThemeReducer from "./slices/appThemeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userId: userIdReducer,
    userName: userNameReducer,
    appTheme: appThemeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
