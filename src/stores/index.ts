import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { CartReducer } from "../slices";

/**
 * Config redux pesist.
 * Storage defaults to localStorage
 */
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: CartReducer,
});

// Create a persisted reducer to be used through out the app
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
