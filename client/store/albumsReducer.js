import axios from "axios";

// Action Types
const GOT_ALL_ALBUMS = "GOT_ALL_ALBUMS";
const GOT_SELECTED_ALBUM = "OT_SELECTED_ALBUM";

// Action Creators
const gotAllAlbums = (albums) => ({
  type: GOT_ALL_ALBUMS,
  albums,
});

const gotSelectedAlbum = (selectedAlbum) => ({
  type: GOT_SELECTED_ALBUM,
  selectedAlbum,
});

// Thunk Creators
export const getAllAlbums = () => {
  return async (dispatch) => {
    try {
      const { data: albums } = await axios.get("/api/albums");
      dispatch(gotAllAlbums(albums));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSelectedAlbum = (id) => {
  return async (dispatch) => {
    try {
      const { data: selectedAlbum } = await axios.get(`/api/albums/${id}`);
      dispatch(gotSelectedAlbum(selectedAlbum));
    } catch (error) {
      console.log(error);
    }
  };
};

// Albums Reducer
const initialState = {
  allAlbums: [],
  selectedAlbum: {},
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_ALBUMS:
      return { ...state, allAlbums: action.albums };
    case GOT_SELECTED_ALBUM:
      return { ...state, selectedAlbum: action.selectedAlbum };
    default:
      return state;
  }
};
export default albumsReducer;
