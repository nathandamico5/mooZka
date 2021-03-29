import React from "react";
import { connect } from "react-redux";
import { getSelectedArtist } from "../store/artistsReducer";
import { Link } from "react-router-dom";

class SingleArtist extends React.Component {
  componentDidMount() {
    const artistId = Number(this.props.match.params.artistId);
    this.props.getSelectedArtist(artistId);
  }

  render() {
    const { artist } = this.props;
    const songs = this.props.songs.filter(
      (song) => song.artistId === artist.id
    );
    const albums = this.props.albums.filter(
      (album) => album.artistId === artist.id
    );
    return (
      <div className="view">
        <div className="artist hero">
          <img src={`/${artist.artistImage}`} />
          <h2>{artist.name}</h2>
        </div>
        <div className="content artist-work">
          <div className="songs">
            <h2>Songs By {artist.name}</h2>
            <table id="songs">
              <tbody>
                <tr className="table-header">
                  <td />
                  <th>Name</th>
                  <th>Album</th>
                </tr>
                {songs.map((song) => {
                  return (
                    <tr className="song" key={song.id}>
                      <td>
                        <i className="fa fa-play-circle" />
                      </td>
                      <td>{song.name}</td>
                      <td>
                        <Link
                          to={`/albums/${song.album.id}/${song.album.slug}`}
                        >
                          {song.album.name}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="artist-albums">
            <h2>Albums By {artist.name}</h2>
            <div className="albums">
              {albums.map((album) => {
                return (
                  <Link
                    to={{
                      pathname: `/albums/${album.id}/${album.slug}`,
                      state: { album },
                    }}
                    key={album.id}
                    className="album-box"
                  >
                    <img src={album.artworkUrl} />
                    <p>{album.name}</p>
                    <small>{album.artist.name}</small>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artist: state.artistData.selectedArtist,
    albums: state.albumData.allAlbums,
    songs: state.songsData.allSongs,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getSelectedArtist: (id) => dispatch(getSelectedArtist(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleArtist);
