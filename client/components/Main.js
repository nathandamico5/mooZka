import React from "react";
import AllAlbums from "./AllAlbums";
import AllArtists from "./AllArtists";
import SideBar from "./SideBar";
import Player from "./Player";
import SingleAlbum from "./SingleAlbum";
import SingleArtist from "./SingleArtist";
import AllSongs from "./AllSongs";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import { getAllArtists } from "../store/artistsReducer";
import { getAllSongs } from "../store/songsReducer";
import { getAllAlbums } from "../store/albumsReducer";

class Main extends React.Component {
  componentDidMount() {
    this.props.getAllAlbums();
    this.props.getAllArtists();
    this.props.getAllSongs();
  }

  render() {
    return (
      <Router>
        <div className="container">
          <SideBar />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/albums" />} />
            <Route exact path="/albums" component={AllAlbums} />
            <Route exact path="/artists" component={AllArtists} />
            <Route exact path="/songs" component={AllSongs} />
            <Route exact path="/artists/:artistId" component={SingleArtist} />
            <Route
              exat
              path="/albums/:albumId/:albumName"
              component={SingleAlbum}
            />
          </Switch>
        </div>
        <Player />
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAllAlbums: () => dispatch(getAllAlbums()),
  getAllArtists: () => dispatch(getAllArtists()),
  getAllSongs: () => dispatch(getAllSongs()),
});

export default connect(null, mapDispatchToProps)(Main);
