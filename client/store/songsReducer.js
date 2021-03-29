import axios from "axios";

// Action Types
const GOT_ALL_SONGS = "GOT_ALL_SONGS";

// Action creators
const gotAllSongs = (songs) => ({
  type: GOT_ALL_SONGS,
  songs,
});

// Thunk creators
export const getAllSongs = () => {
  return async (dispatch) => {
    try {
      const { data: songs } = await axios.get("/api/songs");
      dispatch(gotAllSongs(songs));
    } catch (error) {
      console.log(error);
    }
  };
};

// Songs Reducer
const initialState = {
  allSongs: [],
  selectedSong: {},
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_SONGS:
      return { ...state, allSongs: action.songs };
    default:
      return state;
  }
};

export default songsReducer;
