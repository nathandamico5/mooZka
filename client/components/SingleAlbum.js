import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { getSelectedAlbum } from "../store/albumsReducer";

class SingleAlbum extends React.Component {
  async componentDidMount() {
    const albumId = Number(this.props.match.params.albumId);
    this.props.getSelectedAlbum(albumId);
  }

  render() {
    const { selectedAlbum } = this.props;
    //console.log(this.props.location.state.album);
    return (
      <div className="view">
        {selectedAlbum.name ? (
          <React.Fragment>
            <div className="album hero">
              <div>
                <img src={selectedAlbum.artworkUrl} />
                <h3>{selectedAlbum.name}</h3>
                <p>{selectedAlbum.artist.name}</p>
              </div>
            </div>
            <div className="content">
              <table id="songs">
                <tbody>
                  <tr className="table-header">
                    <td />
                    <th>#</th>
                    <th>Name</th>
                    <th>Artist</th>
                  </tr>
                  {selectedAlbum.songs.map((song, index) => {
                    return (
                      <tr className="song" key={song.id}>
                        <td>
                          <i className="fa fa-play-circle" />
                        </td>
                        <td>{index + 1}</td>
                        <td>{song.name}</td>
                        <td>{selectedAlbum.artist.name}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </React.Fragment>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedAlbum: state.albumData.selectedAlbum,
});

const mapDispatchToProps = (dispatch) => ({
  getSelectedAlbum: (id) => dispatch(getSelectedAlbum(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SingleAlbum));
