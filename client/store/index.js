import { applyMiddleware, combineReducers, createStore } from "redux";
import loggingMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import albumsReducer from "./albumsReducer";
import artistsReducer from "./artistsReducer";
import songsReducer from "./songsReducer";

const rootReducer = combineReducers({
  albumData: albumsReducer,
  artistData: artistsReducer,
  songsData: songsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(loggingMiddleware, thunkMiddleware)
);
export default store;
