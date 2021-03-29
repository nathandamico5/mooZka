import axios from "axios";

// Action Types
const GOT_ALL_ARTISTS = "GOT_ALL_ARTISTS";
const GOT_SELECTED_ARTIST = "GOT_SELECTED_ARTIST";

// Action Creators
const gotAllArtists = (artists) => ({
  type: GOT_ALL_ARTISTS,
  artists,
});

const gotSelectedArtist = (artist) => ({
  type: GOT_SELECTED_ARTIST,
  artist,
});

// Thunk Creators
export const getAllArtists = () => {
  return async (dispatch) => {
    try {
      const { data: artists } = await axios.get("/api/artists");
      dispatch(gotAllArtists(artists));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSelectedArtist = (id) => {
  return async (dispatch) => {
    try {
      console.log("in get selected artist");
      const { data: artist } = await axios.get(`/api/artists/${id}`);
      dispatch(gotSelectedArtist(artist));
    } catch (error) {
      console.log(error);
    }
  };
};

// Artists reducer
const initialState = {
  allArtists: [],
  selectedArtist: {},
};

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_ARTISTS:
      return { ...state, allArtists: action.artists };
    case GOT_SELECTED_ARTIST:
      console.dir("in reducer: " + { ...state, selectedArtist: action.artist });
      return { ...state, selectedArtist: action.artist };
    default:
      return state;
  }
};

export default artistsReducer;
