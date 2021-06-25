import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsSlice from "./postsSlice/postsSlice";
import thunk from "redux-thunk";
import userSlice from "./userSlice/userSlice";

const rootReducer = combineReducers({
  posts: postsSlice,
  user: userSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
