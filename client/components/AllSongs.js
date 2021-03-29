import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AllSongs extends React.Component {
  render() {
    const { allSongs } = this.props;
    return (
      <div className="view">
        <div className="hero">
          <h2>Songs</h2>
          <form className="search">
            <input type="text" placeholder="Search For Songs" />
          </form>
        </div>
        <div className="content">
          <table id="songs">
            <tbody>
              <tr className="table-header">
                <td />
                <th>Name</th>
                <th>Album</th>
                <th>Artist</th>
              </tr>
              {allSongs.map((song) => {
                return (
                  <tr className="song" key={song.id}>
                    <td>
                      <i className="fa fa-play-circle" />
                    </td>
                    <td>{song.name}</td>
                    <td>
                      <Link to={`/albums/${song.album.id}/${song.album.slug}`}>
                        {song.album.name}
                      </Link>
                    </td>
                    <td>{song.artist.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allSongs: state.songsData.allSongs,
});

export default connect(mapStateToProps)(AllSongs);
